import Sortable from "@shopify/draggable/lib/sortable";
import BOOKS from "./plucked-classics.json";
import morphdom from "morphdom";

const FONTS = [
  ["serif", 2],
  ["sans", 2],
  ["cursive", 0.5],
  ["fantasy", 0.25],
];
const TEXT_COLORS = { LIGHT: "light", DARK: "dark" };
const COVER_THICKNESS = 12;
const PAGE_THICKNESS = 0.0667;
const MAX_THICKNESS = 80;
const MIN_HEIGHT = 100;
const MAX_HEIGHT = 145;
const APPROX_CHAR_PER_PAGE = 1277;
const NUM_BOOKS = 47;
const SHELF_WIDTH = 660;
const LIGHT_SAT_DELTA = 10;
const LIGHT_TEXT_THRESH = 55;
const HUE_RANGES = [
  [[-30, 30], 0.4],
  [[190, 240], 0.4],
  [[0, 360], 0.2],
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
const randomSubset = (items, n) => shuffle([...items]).slice(0, n);
const weightedChoice = (itemsWithWeights) => {
  let thresh = Math.random() * itemsWithWeights.map(([a, b]) => b).reduce((a, b) => a + b);
  return itemsWithWeights.reduce(
    ([best, sum], [item, wt]) => (sum < thresh ? [item, sum + wt] : [best, sum]),
    [null, 0]
  )[0];
};
const randomIntRange = (min, max) => Math.floor((max - min) * Math.random() + min);
const clampInt = (val, max, min = 0) => {
  [min, max] = min < max ? [min, max] : [max, min];
  return Math.max(Math.min(Math.floor(val), max), min);
};

const randomColor = () => {
  let [hue_min, hue_max] = weightedChoice(HUE_RANGES);
  let h = randomIntRange(hue_min, hue_max);
  let s = randomIntRange(0, 100);
  let l_min = clampInt(80 - s - LIGHT_SAT_DELTA, 0, 85);
  let l_max = clampInt(80 - s + LIGHT_SAT_DELTA, 15, 100);
  let l = randomIntRange(l_min, l_max);
  let text = l < LIGHT_TEXT_THRESH ? TEXT_COLORS.LIGHT : TEXT_COLORS.DARK;
  return [`${h},${s}%,${l}%`, text];
};
const rotate = (arr) => arr.slice(1).concat(arr.slice(0, 1));
const morph = (el1, el2, options) =>
  morphdom(el1, el2, {
    onBeforeElUpdated: function (fromEl, toEl) {
      if (fromEl.isEqualNode(toEl)) return false;
      return true;
    },
    ...options,
  });

class Book {
  static randomLibrary(bookData, size) {
    return randomSubset(bookData, size).map((b) => new Book(b));
  }
  constructor({ title, author, characters, year }) {
    Object.assign(this, { title, author, characters, year });
    this.id = randomIntRange(0, 100000000);
    this.font = weightedChoice(FONTS);
    [this.backgroundColor, this.textColor] = randomColor();
  }
  get pages() {
    return (this._pages ||= Math.floor(this.characters / APPROX_CHAR_PER_PAGE));
  }
  get height() {
    if (this._height) return this._height;
    let potential = (this.pages / (MAX_HEIGHT - MIN_HEIGHT)) * 2 + MIN_HEIGHT;
    return (this._height = clampInt(randomIntRange(MIN_HEIGHT, potential), MAX_HEIGHT));
  }
  get thickness() {
    return (this._thickness ||= clampInt(
      this.pages * PAGE_THICKNESS + COVER_THICKNESS,
      MAX_THICKNESS
    ));
  }
  get abbreviatedTitle() {
    return (this._abbrTitle ||= this.title.split(/[:;]/)[0]);
  }
  get abbreviatedAuthor() {
    return (this._abbrAuth ||= rotate(
      this.author
        .replace(/[^a-zA-Z0-9,\ ]/g, "")
        .split(/\ |,/)
        .filter((s) => s)
        .map((s) => s[0])
    )
      .join("")
      .substring(0, 3)
      .toUpperCase());
  }
  get decoration() {
    return (this._deco ??=
      this.abbreviatedTitle.length < 15
        ? weightedChoice([
            ["top-double", 0.5],
            ["double", 0.25],
            ["double-solid", 0.25],
            ["ridge", 0.25],
          ])
        : "");
  }
  get spinePattern() {
    return (this._pattern ??= weightedChoice([
      ["", 0.3],
      ["2", 0.5],
      ["3", 0.2],
    ]));
  }
}

class ApplicationState {
  static MODES = { DEFAULT: "default", MOVING: "moving" };
  static DIRECTIONAL_KEYS = new Map([
    ["h", "l"],
    ["j", "l"],
    ["k", "k"],
    ["l", "r"],
    ["i", "u"],
    [";", "r"],
    ["ArrowLeft", "l"],
    ["ArrowRight", "r"],
    ["ArrowUp", "u"],
    ["ArrowDown", "k"],
  ]);
  constructor(numBooks, renderFn) {
    this.books = Book.randomLibrary(BOOKS, numBooks);
    this.mode = ApplicationState.MODES.DEFAULT;
    this.focused = 0;
    this.selected = null;
    this.mode = ApplicationState.MODES.DEFAULT;
    this.multiplier = 1;
    this._render = renderFn;
  }
  get isMoving() {
    return this.mode == ApplicationState.MODES.DEFAULT;
  }

  focusBook(idx) {
    this.focused = idx;
    this.render();
  }

  keyDown(key) {
    if (this.mode == ApplicationState.MODES.MOVING) {
      if (key >= 1 && key <= 9) {
        this.multiplier = parseInt(key, 10);
      }
      let direction;
      if ((direction = ApplicationState.DIRECTIONAL_KEYS.get(key))) {
        this.moveSelectedBook(direction);
      }
    } else if (this.mode == ApplicationState.MODES.DEFAULT) {
      let direction;
      if ((direction = ApplicationState.DIRECTIONAL_KEYS.get(key))) {
        this.moveCursor(direction);
      } else if (key === " ") {
        this.enterMoveMode();
      }
    }
  }

  keyUp(key) {
    if (key === " ") {
      this.enterDefaultMode();
    }
  }

  moveCursor(direction) {
    if (direction === "l") {
      this.focused--;
    } else if (direction === "r") {
      this.focused++;
    }
    if (this.focused < 0) {
      this.focused += this.books.length;
    }
    this.focused %= this.books.length;
    this.render();
  }

  enterMoveMode() {
    this.selected = this.focused;
    this.focused = null;
    this.mode = ApplicationState.MODES.MOVING;
    this.render();
  }

  enterDefaultMode() {
    this.focused = this.selected || this.focused || 0;
    this.selected = null;
    this.multiplier = 1;
    this.mode = ApplicationState.MODES.DEFAULT;
    this.render();
  }

  moveSelectedBook(direction) {
    let dir = direction === "l" ? -1 : 1;
    let oldIdx = this.selected;
    let newIdx = clampInt(oldIdx + dir * this.multiplier, 0, this.books.length - 1);
    this.selected = newIdx;
    this.multiplier = 1;
    this.moveBookToIndex(oldIdx, newIdx);
  }

  moveBookToIndex(oldIdx, newIdx, render = true) {
    let books = this.books;
    let removed = books.splice(oldIdx, 1);
    books.splice(newIdx, 0, ...removed);
    if (render) this.render();
  }

  changeSelection(idx) {
    this.selected = idx;
    if (idx != null) {
      let book = this.books[idx];
      return book;
    } else {
      return null;
    }
  }

  render(cb) {
    requestAnimationFrame(() => {
      this._render(this);
      if (cb) cb();
    });
    return this;
  }
}

const Components = {
  BookList: ({ books, selected, focused, isMoving }) => {
    let [chunks, _] = books.reduce(
      ([chunks, width], book, i) => {
        if (book.thickness + width >= SHELF_WIDTH) {
          chunks.push([[book], i]);
          return [chunks, book.thickness];
        } else {
          let [chunk, _] = chunks[chunks.length - 1];
          chunk.push(book);
          return [chunks, width + book.thickness];
        }
      },
      [[[[], 0]], 0]
    );
    return `
    <div class="dummy">
      <div class="book-case">
      ${chunks
        .map(([books, offset]) => Components.BookShelf(books, offset, selected, focused, isMoving))
        .join("")}
      </div>
      ${
        selected !== null || focused !== null
          ? Components.BookDetails(books[selected] || books[focused])
          : ""
      }
    </div>`;
  },

  BookShelf: (books, offset, selected, focused, moving) => {
    return `
    <ul class="book-shelf"
        data-book-idx="${offset}">
        ${books
          .map((book, i) => Components.Book(book, selected, focused, moving, i + offset))
          .join("")}
    </ul>`;
  },

  BookDetails: (book) => {
    deets = [
      ["Title", `<b>${book.title}</b>`],
      ["Author", book.author],
      ["Year", `© ${book.year}`],
      ["Pages", `${book.pages}pp.`],
    ];
    return `
     <aside class="selected-book">
        <dl class="book-details"
            style="--book-color: ${book.backgroundColor};">
          ${deets.map(([dt, dd]) => Components.BookDetail(dt, dd)).join("")}
        </dl>
    </aside>`;
  },

  BookDetail: (dt, dd) => {
    return `
      <dt>${dt}</dt>
      <dd>${dd}</dd>
    `;
  },

  Book: (book, selected, focused, moving, i) => {
    return `
    <li style="
            --book-color: ${book.backgroundColor};
            --book-height: ${book.height}px;
            --book-thickness: ${book.thickness}px;
            "
        class="book"
        id="book-${book.id}"
        title="${book.title}"
        data-index="${i}"
        ${selected === i ? "data-selected" : ""}
        ${moving && selected === i ? "data-moving" : ""}
        ${focused === i ? "data-focused" : ""}
        data-text-color="${book.textColor}"
        data-font="${book.font}"
        data-spine-pattern="${book.spinePattern}"
        >
        <span class="title"
              data-spine-decoration="${book.decoration}">
            ${book.abbreviatedTitle}
        </span>
        <span class="author">${book.abbreviatedAuthor}</span>
    </li>`;
  },
};

const render = (state) => {
  morph(document.querySelector("main"), Components.BookList(state), {
    childrenOnly: true,
  });
};

const attachEventHandlers = (app) => {
  window.addEventListener("keydown", (e) => {
    if (e.key === " ") e.preventDefault(); // don't scroll
    app.keyDown(e.key);
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === " ") e.preventDefault(); // don't scroll
    app.keyUp(e.key);
  });
  document.getElementById("app").addEventListener("click", (e) => {
    let bookEl = e.target.closest("li.book");
    if (bookEl) {
      e.preventDefault();
      const index = parseInt(bookEl.dataset.index);
      app.focusBook(index);
    }
  });
  document.getElementById("toggleHowTo").addEventListener("click", (e) => {
    document.getElementById("howTo").toggleAttribute("data-closed");
  });
};

var sortable;
function initSortable() {
  if (sortable) {
    sortable.destroy();
  }
  sortable = new Sortable(document.querySelectorAll("ul.book-shelf"), {
    draggable: "li.book",
  });
  sortable.on("sortable:start", (e) => {
    let bookIdx = parseInt(e.data.dragEvent.source.dataset.index, 10);
    let book = application.changeSelection(bookIdx);
    morph(document.querySelector("aside.selected-book"), Components.BookDetails(book));
    Array.from(document.querySelectorAll("li.book")).forEach(function (el) {
      el.removeAttribute("data-focused");
    });
    document.querySelector(`li.book[data-index="${bookIdx}"`).setAttribute("data-selected", "");
  });
  sortable.on("sortable:stop", (e) => {
    let el = e.data.dragEvent.source;
    let oldIdx = parseInt(el.dataset.index, 10);
    let newIdx;
    if (el.previousElementSibling) {
      let sibIdx = parseInt(el.previousElementSibling.dataset.index, 10);
      newIdx = sibIdx > oldIdx ? sibIdx : sibIdx + 1;
    } else {
      let shelf = e.data.dragEvent.source.parentNode;
      let shelfIdx = parseInt(shelf.dataset.bookIdx, 10);
      newIdx = e.data.newIndex + shelfIdx;
    }
    application.moveBookToIndex(oldIdx, newIdx, false);
    application.changeSelection(null);
    application.focusBook(newIdx);
  });
}

const application = new ApplicationState(NUM_BOOKS, render).render(() => {
  initSortable();
  attachEventHandlers(application);
});

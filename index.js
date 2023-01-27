const Draggable = require("@shopify/draggable");

const FONTS = ["serif", "sans"];
const TEXT_COLORS = { LIGHT: "light", DARK: "dark" };

const COVER_THICKNESS = 12;
const PAGE_THICKNESS = 2 / 3 / 10;
const MAX_THICKNESS = 80;

const MIN_HEIGHT = 100;
const MAX_HEIGHT = 145;

const APPROX_CHAR_PER_PAGE = 1277;

const TOTAL_BOOKS = 47;

const SHELF_WIDTH = 660;

const flipCoin = () => {
  return Math.floor(Math.random() * 2);
};

/**
 *
 * SETUP
 *
 **/
const loadData = (totalBooks) => {
  const data = require("./plucked-classics.json");

  return getRandomBooks(data, totalBooks).map(assignCosmeticAttributes);
};

const getRandomBooks = (books, n) => {
  let result = new Array(n),
    len = books.length,
    taken = new Array(len);
  if (n > len) {
    throw new RangeError("getRandom: more elements taken than available");
  }
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = books[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const sortByRank = (a, b) => {
  return a.rank - b.rank;
};

const bookHeightLimitOverMinimum = (pages) => {
  return (pages / (MAX_HEIGHT - MIN_HEIGHT)) * 2;
};

const bookHeight = (pages) => {
  return Math.min(
    MAX_HEIGHT,
    MIN_HEIGHT + Math.floor(Math.random() * bookHeightLimitOverMinimum(pages))
  );
};

const bookThickness = (pages) => {
  return Math.min(
    Math.floor(pages * PAGE_THICKNESS + COVER_THICKNESS),
    MAX_THICKNESS
  );
};

const bookLengthPages = (characters) => {
  return Math.floor(characters / APPROX_CHAR_PER_PAGE);
};
const randomIntRange = (min, max) => {
  return Math.floor((max - min) * Math.random() + min);
};

const MIN_SAT = 5;
const MAX_SAT = 50;
const MIN_LIGHT = 8;
const MAX_LIGHT = 60;
const LIGHT_TEXT_THRESH = 55;

const randomColor = () => {
  let h = randomIntRange(0, 360);
  let s = randomIntRange(MIN_SAT, MAX_SAT);
  let l = randomIntRange(MIN_LIGHT, MAX_LIGHT);
  let text;
  if (l < 50) {
    text = TEXT_COLORS.LIGHT;
  } else {
    text = TEXT_COLORS.DARK;
  }
  return [`${h},${s}%,${l}%`, text];
};

const abbreviateTitle = (title) => {
  return title.split(/[:;]/)[0];
};

const abbreviateAuthor = (author) => {
  let names = author.replace(/[^a-zA-Z0-9,\ ]/g, "").split(/\ |,/);
  names.push(names.shift());
  return names
    .reduce((acc, word) => {
      if (word) {
        acc += word.substring(0, 1);
      }
      return acc;
    }, "")
    .substring(0, 3)
    .toUpperCase();
};

const assignCosmeticAttributes = (book) => {
  const pages = bookLengthPages(book.characters),
    height = bookHeight(pages),
    thickness = bookThickness(pages),
    abbreviatedTitle = abbreviateTitle(book.title),
    [backgroundColor, textColor] = randomColor(),
    font = FONTS[flipCoin()],
    decoration =
      abbreviatedTitle.length < 15
        ? "border-top: 4px double;" +
          (flipCoin()
            ? `border-bottom: ${flipCoin() ? "4px double" : "2px solid"};`
            : "")
        : "";
  return Object.assign({}, book, {
    backgroundColor,
    textColor,
    font,
    pages,
    height,
    thickness,
    abbreviatedTitle,
    abbreviatedAuthor: abbreviateAuthor(book.author),
    decoration,
  });
};

const initialState = (totalBooks = 10) => {
  return {
    books: loadData(totalBooks),
    focused: 0,
    selected: null,
    mode: MODES.DEFAULT,
    multiplier: 1,
  };
};

/**
 *
 * Interaction
 *
 **/
const MODES = {
  DEFAULT: "default",
  MOVING: "moving",
};

const USER_ACTIONS = {
  CLICK_BOOK: "clickBook",
  KEY_DOWN: "keyDown",
  KEY_UP: "keyUp",
};
const STATE_ACTIONS = {
  ENTER_DEFAULT_MODE: "enterDefaultMode",
  MOVE_CURSOR: "moveCursor",
  ENTER_MOVING_MODE_FOR_BOOK: "enterMovingMode",
  MOVE_BOOK: "moveBook",
  REGISTER_MULTIPLIER: "registerMultiplier",
};

const DIRECTIONAL_KEYS = [
  "h",
  "j",
  "k",
  "l",
  "i",
  ";",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
];

const directionFromKey = (key) => {
  switch (key) {
    case "ArrowLeft":
    case "h":
    case "j":
      return "l";
    case "ArrowRight":
    case "l":
    case ";":
      return "r";
    case "ArrowUp":
    case "i":
      return "u";
    case "ArrowDown":
    case "k":
      return "k";
    default:
      return null;
  }
};

const enterDefaultMode = function () {
  this.present({
    name: STATE_ACTIONS.ENTER_DEFAULT_MODE,
  });
};

const moveCursor = function (direction) {
  this.present({
    name: STATE_ACTIONS.MOVE_CURSOR,
    data: direction,
  });
};

const enterMovingMode = function () {
  this.present({
    name: STATE_ACTIONS.ENTER_MOVING_MODE,
  });
};

const moveBook = function (direction) {
  this.present({
    name: STATE_ACTIONS.MOVE_BOOK,
    data: direction,
  });
};

const registerMultiplier = function (multiplier) {
  this.present({
    name: STATE_ACTIONS.REGISTER_MULTIPLIER,
    data: multiplier,
  });
};

const handleKeyDown = function (e) {
  if (e.key === " ") {
    // don't scroll
    e.preventDefault();
  }
  this.present({
    name: USER_ACTIONS.KEY_DOWN,
    data: e.key,
  });
};

const handleKeyUp = function (e) {
  if (e.key === " ") {
    // don't scroll
    e.preventDefault();
  }
  this.present({
    name: USER_ACTIONS.KEY_UP,
    data: e.key,
  });
};

const handleBookClick = function (e, el) {
  e.preventDefault();

  const index = parseInt(el.dataset.index);
  this.present({
    name: USER_ACTIONS.CLICK_BOOK,
    data: index,
  });
};

class ApplicationState {
  constructor(initialData, renderFn) {
    this._data = initialData;
    this._render = renderFn;
    this.acceptState = this.acceptState.bind(this);
    this.nextAction = this.nextAction.bind(this);
    this.present = this.present.bind(this);
    this.render = this.render.bind(this);
    return this;
  }

  get data() {
    return this._data;
  }

  set data(_data) {
    this._data = _data;
    return this.data;
  }

  acceptState(state) {
    this.data = state;
    if (!this.nextAction(this.data)) {
      return this.render();
    }
  }

  nextAction(state) {
    let direction;
    if (state.mode === MODES.MOVING) {
      if (state.key >= 1 && state.key <= 9) {
        // store multiplier
        registerMultiplier.bind(this)(state.key);
        return true;
      } else if (state.key === " ") {
        // unset multiplier
        // enter default mode
        enterDefaultMode.bind(this)();
        return true;
      } else if (DIRECTIONAL_KEYS.includes(state.key)) {
        // execute move
        direction = directionFromKey(state.key);
        moveBook.bind(this)(direction);
        return true;
      }
    } else if (state.mode === MODES.DEFAULT) {
      if (state.key === "enter") {
        // enter viewing mode
        // register selected book
        enterViewingMode.bind(this)();
        return true;
      } else if (DIRECTIONAL_KEYS.includes(state.key)) {
        direction = directionFromKey(state.key);
        moveCursor.bind(this)(direction);
        return true;
      } else if (state.key === " ") {
        // KEEP selected book
        // enter moving mode
        enterMovingMode.bind(this)();
        return true;
      }
    }
    return false;
  }

  present({ name, data }) {
    const state = Object.assign({}, this.data);
    let direction;
    // accept or reject
    switch (name) {
      case USER_ACTIONS.KEY_DOWN:
        if (state.mode !== MODES.MOVING || data !== " ") {
          state.key = data;
        }
        break;
      case USER_ACTIONS.KEY_UP:
        if (data === " ") {
          state.key = data;
        }
        break;
      case USER_ACTIONS.CLICK_BOOK:
        state.focused = data;
        break;
      case STATE_ACTIONS.ENTER_DEFAULT_MODE:
        state.focused = state.selected || state.focused || 0;
        state.selected = null;
        state.multiplier = 1;
        state.mode = MODES.DEFAULT;
        state.key = null;
        break;
      case STATE_ACTIONS.MOVE_CURSOR:
        direction = data;
        if (direction === "l") {
          state.focused =
            state.focused > 0 ? state.focused - 1 : state.books.length - 1;
        } else if (direction === "r") {
          state.focused =
            state.focused === state.books.length - 1 ? 0 : state.focused + 1;
        }
        state.key = null;
        break;
      case STATE_ACTIONS.ENTER_MOVING_MODE:
        state.selected = state.focused;
        state.focused = null;
        state.mode = MODES.MOVING;
        state.key = null;
        break;
      case STATE_ACTIONS.MOVE_BOOK:
        direction = data;
        let [newBooks, newSelected] = shiftSelectedIndex(
          state.selected,
          direction,
          state.multiplier,
          state.books
        );
        state.books = newBooks;
        state.selected = newSelected;
        state.multiplier = 1;
        state.key = null;
        break;
      case STATE_ACTIONS.REGISTER_MULTIPLIER:
        state.multiplier = parseInt(data);
        state.key = null;
        break;
    }

    return this.acceptState(state);
  }

  changeSelection(idx) {
    this.data.selected = idx;
    if (idx) {
      let book = this.data.books[idx];
      return book;
    } else {
      return null;
    }
  }

  moveBookToIndex(oldIdx, newIdx) {
    let books = this.data.books;
    let removed = books.splice(oldIdx, 1);
    books.splice(newIdx, 0, ...removed);
    this.render();
  }
  render() {
    this._render(this.data);
    return this;
  }
}

const shiftSelectedIndex = (index, direction, multiplier, books) => {
  // https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
  if (direction === "l") {
    multiplier *= -1;
  }
  const removed = books.splice(index, 1)[0];
  const newIndex = Math.min(Math.max(0, index + multiplier), books.length);
  books.splice(newIndex, 0, removed);
  return [books, newIndex];
};

/**
 *
 * Presentation
 *
 **/
const BookList = (books, selected, focused, moving) => {
  let shelfWidth = 0;
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
    <div class="book-case border-[#613c00] border-t-[10px] border-x-[10px] float-right w-[770px]">
    ${chunks
      .map(([books, offset]) =>
        BookShelf(books, offset, selected, focused, moving)
      )
      .join("")}
    </div>
    ${
      selected !== null || focused !== null
        ? BookDetails(books[selected] || books[focused])
        : ""
    }`;
};

const BookShelf = (books, offset, selected, focused, moving) => {
  return `
    <ul class="book-shelf flex h-[200px] mt-3 mb-4 p-0 items-end border-b-[6px] border-[#613c00]"
        data-book-idx="${offset}">
        ${books
          .map((book, i) => Book(book, selected, focused, moving, i + offset))
          .join("")}
    </ul>`;
};

const BookDetails = (book) => {
  deets = [
    ["Title", `<b>${book.title}</b>`],
    ["Author", book.author],
    ["Year", `© ${book.year}`],
    ["Pages", `${book.pages}pp.`],
  ];
  return `
     <aside class="selected-book p-0 relative h-[268px] w-[400px]">
        <dl class="book-details blook h-full m-0 pt-[24px] px-[8px] relative"
            style="border-color: rgb(${book.backgroundColor});">
          ${deets.map(([dt, dd]) => BookDetail(dt, dd)).join("")}
        </dl>
    </aside>`;
};

const BookDetail = (dt, dd) => {
  return `
    <dt class="text-white font-bold float-left clear-left relative w-[54%] z-[1]">${dt}</dt>
    <dd class="m-0 float-left relative text-center w-[46%] z-[1]">${dd}</dd>
  `;
};

const Book = (book, selected, focused, moving, i) => {
  return `
    <li style="
            --book-color: ${book.backgroundColor};
            --book-height: ${book.height}px;
            --book-thickness: ${book.thickness}px;
            "
        class="book"
        title="${book.title}"
        data-index="${i}"
        ${selected === i ? "data-selected" : ""}
        ${moving && selected === i ? "data-moving" : ""}
        ${focused === i ? "data-focused" : ""}
        data-text-color="${book.textColor}"
        data-font="${book.font}"
        >
        <span class="title bottom-[27px] block left-0 truncate pt-[2px] absolute right-0 top-[8px] align-middle [writing-mode:vertical-lr]"
              style="${book.decoration}">
            ${book.abbreviatedTitle}
        </span>
        <span class="author bottom-[8px] block left-0 leading-4 truncate absolute right-0 text-center">${
          book.abbreviatedAuthor
        }</span>
    </li>`;
};

const render = (state) => {
  document.getElementsByTagName("main")[0].innerHTML = BookList(
    state.books,
    state.selected,
    state.focused,
    state.mode === MODES.MOVING
  );
  initSortable();
};

const attributeBookClick = (el) => {
  let bookEl = null;
  while (el.nodeName !== "UL") {
    if (el.nodeName === "LI" && el.className.indexOf("book") > -1) {
      bookEl = el;
    }
    el = el.parentNode;
  }
  return bookEl;
};

const attachEventHandlers = (app) => {
  window.addEventListener("keydown", handleKeyDown.bind(app), false);
  window.addEventListener("keyup", handleKeyUp.bind(app), false);
  document.getElementById("app").addEventListener("click", (e) => {
    let bookEl;
    if ((bookEl = attributeBookClick(e.target))) {
      handleBookClick.bind(app)(e, bookEl);
    }
  });
};

const application = new ApplicationState(
  initialState(TOTAL_BOOKS),
  render
).render();
attachEventHandlers(application);

var sortable;
function initSortable() {
  if (sortable) {
    sortable.destroy();
  }
  sortable = new Draggable.Sortable(
    document.querySelectorAll("ul.book-shelf"),
    {
      draggable: "li.book",
    }
  );
  sortable.on("sortable:start", (e) => {
    let bookIdx = parseInt(e.data.dragEvent.source.dataset.index, 10);
    let book = application.changeSelection(bookIdx);
    document.querySelector("aside.selected-book").outerHTML = BookDetails(book);
    Array.from(document.querySelectorAll("li.book")).forEach(function (el) {
      el.removeAttribute("data-focused");
    });
    document
      .querySelector(`li.book[data-index="${bookIdx}"`)
      .setAttribute("data-selected", "");
  });
  sortable.on("sortable:stop", (e) => {
    let oldIdx = parseInt(e.data.dragEvent.source.dataset.index, 10);
    let shelf = e.data.dragEvent.source.parentNode;
    let shelfIdx = parseInt(shelf.dataset.bookIdx, 10);
    let newIdx = e.data.newIndex + shelfIdx;
    application.moveBookToIndex(oldIdx, newIdx);
    application.changeSelection(null);
    application.present({ name: USER_ACTIONS.CLICK_BOOK, data: newIdx });
  });
}
initSortable();

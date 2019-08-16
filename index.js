const LIGHT_COLORS = [
    '235,219,193',
    '186,185,154',
    '202,186,161',
    '196,176,151',
    '203,192,190',
    '223,211,213',
    '178,177,173',
    '213,185,181'
];
const DARK_COLORS = [
    '156,94,105',
    '89,55,79',
    '185,146,164',
    '131,108,116',
    '125,115,122',
    '20,28,79',
    '6,14,66',
    '137,154,174',
    '150,137,120',
    '28,63,95',
    '130,92,47',
    '166,143,137',
    '169,133,85',
    '89,114,82',
    '25,64,69',
    '168,138,112',
    '13,42,72',
    '126,68,54',
    '129,149,173',
    '126,68,54',
    '160,162,161',
    '138,157,163',
    '108,125,132',
    '18,53,10',
    '56,76,60',
    '38,81,125',
    '90,46,46',
    '75,0,15',
    '141,32,54'
];
const FONTS = ['Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;', 'inherit'];

const COVER_THICKNESS = 12;
const PAGE_THICKNESS = (2 / 3) / 10;
const MAX_THICKNESS = 80;

const MIN_HEIGHT = 100;
const MAX_HEIGHT = 145;

const APPROX_CHAR_PER_PAGE = 1277;

const TOTAL_BOOKS = 42;

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
    const data = require('./plucked-classics.json');

    return getRandomBooks(data, totalBooks).map(assignCosmeticAttributes);
};

const getRandomBooks = (books, n) => {
    let result = new Array(n),
        len = books.length,
        taken = new Array(len);
    if (n > len) {
        throw new RangeError('getRandom: more elements taken than available');
    }
    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = books[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const sortByRank = (a, b) => {
    return a.rank - b.rank;
};

const bookHeightLimitOverMinimum = (pages) => {
    return pages / (MAX_HEIGHT - MIN_HEIGHT) * 2;
};

const bookHeight = (pages) => {
    return Math.min(
        MAX_HEIGHT,
        MIN_HEIGHT + Math.floor((Math.random() * bookHeightLimitOverMinimum(pages)))
    );
};

const bookThickness = (pages) => {
    return Math.min(Math.floor((pages * PAGE_THICKNESS) + COVER_THICKNESS), MAX_THICKNESS);
};

const bookLengthPages = (characters) => {
    return Math.floor(characters / APPROX_CHAR_PER_PAGE);
};

const randomColor = () => {
    let colorIndex = Math.floor(
        Math.random() *
        (LIGHT_COLORS.length + DARK_COLORS.length)
    ) - 1;
    if (colorIndex === -1) { colorIndex = 0; }

    return colorIndex < LIGHT_COLORS.length
        ? [LIGHT_COLORS[colorIndex], '#555']
        : [DARK_COLORS[colorIndex - LIGHT_COLORS.length], '#eee'];
};

const abbreviateTitle = (title) => {
    return title.split(/[:;]/)[0];
};

const abbreviateAuthor = (author) => {
    let names = author.replace(/[^a-zA-Z0-9,\ ]/g, '').split(/\ |,/);
    names.push(names.shift());
    return names.reduce((acc, word) => {
        if (word) {
            acc += word.substring(0, 1);
        }
        return acc;
    }, '').substring(0, 3).toUpperCase();
};

const assignCosmeticAttributes = (book) => {
    const pages = bookLengthPages(book.characters),
        height = bookHeight(pages),
        thickness = bookThickness(pages),

        abbreviatedTitle = abbreviateTitle(book.title),

        [backgroundColor, textColor] = randomColor(),
        font = FONTS[flipCoin()],
        decoration = abbreviatedTitle.length < 15
            ? 'border-top: 4px double;'
            + (flipCoin()
                ? `border-bottom: ${flipCoin() ? '4px double' : '2px solid'};`
                : ''
            )
            : '';
    return Object.assign({}, book, {
        backgroundColor,
        textColor,
        font,
        pages,
        height,
        thickness,
        abbreviatedTitle,
        abbreviatedAuthor: abbreviateAuthor(book.author),
        decoration
    });
};

const initialState = (totalBooks = 10) => {
    return {
        books: loadData(totalBooks),
        focused: 0,
        selected: null,
        mode: MODES.DEFAULT,
        multiplier: 1
    }
};





/**
 *
 * Interaction
 *
 **/
const MODES = {
    DEFAULT: 'default',
    VIEWING_DETAILS: 'viewing',
    MOVING: 'moving'
};

const USER_ACTIONS = {
    CLICK_BOOK: 'clickBook',
    KEY_DOWN: 'keyDown',
    KEY_UP: 'keyUp'
};
const STATE_ACTIONS = {
    ENTER_DEFAULT_MODE: 'enterDefaultMode',
    MOVE_CURSOR: 'moveCursor',
    ENTER_MOVING_MODE_FOR_BOOK: 'enterMovingMode',
    MOVE_BOOK: 'moveBook',
    REGISTER_MULTIPLIER: 'registerMultiplier'
};

const DIRECTIONAL_KEYS = ['j','k','l','i', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

const directionFromKey = (key) => {
    switch (key) {
        case 'ArrowLeft':
        case 'j':
            return 'l';
        case 'ArrowRight':
        case 'l':
            return 'r';
        case 'ArrowUp':
        case 'i':
            return 'u';
        case 'ArrowDown':
        case 'k':
            return 'k';
        default:
            return null;
    }
};

const enterDefaultMode = function() {
    this.present({
        name: STATE_ACTIONS.ENTER_DEFAULT_MODE
    });
};

const moveCursor = function(direction) {
    this.present({
        name: STATE_ACTIONS.MOVE_CURSOR,
        data: direction
    });
};

const enterMovingMode = function() {
    this.present({
        name: STATE_ACTIONS.ENTER_MOVING_MODE
    });
};

const moveBook = function(direction) {
    this.present({
        name: STATE_ACTIONS.MOVE_BOOK,
        data: direction
    });
};

const registerMultiplier = function(multiplier) {
    this.present({
        name: STATE_ACTIONS.REGISTER_MULTIPLIER,
        data: multiplier
    });
};

const handleKeyDown = function(e) {
    if (e.key === ' ') {
        // don't scroll
        e.preventDefault();
    }
    this.present({
        name: USER_ACTIONS.KEY_DOWN,
        data: e.key
    });
};

const handleKeyUp = function(e) {
    if (e.key === ' ') {
        // don't scroll
        e.preventDefault();
    }
    this.present({
        name: USER_ACTIONS.KEY_UP,
        data: e.key
    });
};

const handleBookClick = function(e, el) {
    e.preventDefault();

    const index = parseInt(el.dataset.index);
    this.present({
        name: USER_ACTIONS.CLICK_BOOK,
        data: index
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
            } else
            if (state.key === ' ') {
                // unset multiplier
                // enter default mode
                enterDefaultMode.bind(this)();
                return true;
            } else
            if (DIRECTIONAL_KEYS.includes(state.key)) {
                // execute move
                direction = directionFromKey(state.key);
                moveBook.bind(this)(direction);
                return true;
            }
        } else
        if (state.mode === MODES.VIEWING_DETAILS) {
            if (state.key === 'enter') {
                // unset selected book
                // enter default mode
                enterDefaultMode.bind(this)();
                return true;
            } else
            if (state.key === ' ') {
                // KEEP selected book
                // enter moving mode
                enterMovingMode.bind(this)();
                return true;
            }
        } else
        if (state.mode === MODES.DEFAULT) {
            if (state.key === 'enter') {
                // enter viewing mode
                // register selected book
                enterViewingMode.bind(this)();
                return true;
            } else
            if (DIRECTIONAL_KEYS.includes(state.key)) {
                direction = directionFromKey(state.key);
                moveCursor.bind(this)(direction);
                return true;
            } else
            if (state.key === ' ') {
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
                if (state.mode !== MODES.MOVING || data !== ' ') {
                    state.key = data;
                }
                break;
            case USER_ACTIONS.KEY_UP:
                if (data === ' ') {
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
                if (direction === 'l') {
                    state.focused = state.focused > 0
                        ? state.focused - 1
                        : state.books.length - 1;
                } else
                if (direction === 'r') {
                    state.focused = state.focused === state.books.length - 1
                        ? 0
                        : state.focused + 1;
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
                let [newBooks, newSelected] = shiftSelectedIndex(state.selected, direction, state.multiplier, state.books);
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

    render() {
        this._render(this.data);
        return this;
    }
};

const shiftSelectedIndex = (index, direction, multiplier, books) => {
    // https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
    if (direction === 'l') {
        multiplier *= -1;
    }
    const removed = books.splice(index, 1)[0];
    const newIndex = Math.min(
        Math.max(0, index + multiplier),
        books.length
    );
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
    return `<div class="book-case">
        <ul class="book-shelf">${
            books.reduce((acc, book, i) => {
                if (shelfWidth + book.thickness >= SHELF_WIDTH) {
                    acc += '</ul><ul class="book-shelf">';
                    shelfWidth = 0;
                }
                shelfWidth += book.thickness;
                acc += Book(book, selected, focused, moving, i);
                return acc;
            }, '')
            // books.map(Book.bind(Book, selected, focused, moving)).join('')
        }</ul>
    </div>
    ${
        (selected !== null || focused !== null)
            ? BookDetails(books[selected || focused])
            : ''
    }`;
};

const BookDetails = (book) => {
    return `<aside class="selected-book">
        <dl class="book-details" style="border-color: rgb(${book.backgroundColor});">
            <dt>Title</dt>
            <dd><b>${book.title}</b></dd>

            <dt>Author</dt>
            <dd>${book.author}</dd>

            <dt>Year</dt>
            <dd>© ${book.year}</dd>

            <dt>Pages</dt>
            <dd>${book.pages}pp.</dd>
        </dl>
    </aside>`;
};

const Book = (book, selected, focused, moving, i) => {
    return `<li style="
        background: rgb(${book.backgroundColor});
        background: linear-gradient(
            90deg,
            rgba(${book.backgroundColor},1) 0%,
            rgba(${book.backgroundColor},0.9) 10%,
            rgba(${book.backgroundColor},0.9) 70%,
            rgba(${book.backgroundColor},0.8) 99%,
            rgba(${book.backgroundColor},1) 100%
        );
        border: 0 solid rgba(${book.backgroundColor});
        color: ${book.textColor};
        font-family: ${book.font};
        height: ${book.height}px;
        line-height: ${book.thickness}px;
        width: ${book.thickness}px;
    " class="book ${
        selected === i ? 'selected' : ''} ${
        moving && selected === i ? 'moving' : ''} ${
        focused === i ? 'focused' : ''
    }" title="${book.title}" data-index="${i}">
        <span class="title" style="${book.decoration}">${book.abbreviatedTitle}</span>
        <span class="author">${book.abbreviatedAuthor}</span>
    </li>`
};

const render = (state) => {
    document.getElementsByTagName('main')[0].innerHTML = BookList(state.books, state.selected, state.focused, (state.mode === MODES.MOVING));
};

const attributeBookClick = (el) => {
    let bookEl = null;
    while (el.nodeName !== 'UL') {
        if (el.nodeName === 'LI' && el.className.indexOf('book') > -1) {
            bookEl = el;
        }
        el = el.parentNode;
    }
    return bookEl;
};

const attachEventHandlers = (app) => {
    window.addEventListener('keydown', handleKeyDown.bind(app), false);
    window.addEventListener('keyup', handleKeyUp.bind(app), false);
    document.getElementById('app').addEventListener('click', (e) => {
        let bookEl;
        if (bookEl = attributeBookClick(e.target)) {
            handleBookClick.bind(app)(e, bookEl);
        }
    });
};




const application = new ApplicationState(initialState(TOTAL_BOOKS), render).render();
attachEventHandlers(application);

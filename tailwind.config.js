/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index.js"],
  theme: {
    extend: {
      backgroundImage: {
        "book-gradient": `
          linear-gradient(
            90deg,
            hsla(var(--book-color),1) 0%,
            hsla(var(--book-color),0.9) 10%,
            hsla(var(--book-color),0.9) 70%,
            hsla(var(--book-color),0.8) 99%,
            hsla(var(--book-color),1) 100%
          );`,
        "book-gradient-2": `
          repeating-linear-gradient(
            36deg,
            rgba(255,255,255, 0.1),
            rgba(255,255,255, 0.1)
            1px,
            transparent 0px,
            transparent 2px
          ),
          linear-gradient(
            90deg,
            hsla(var(--book-color),1) 0%,
            hsla(var(--book-color),0.9) 10%,
            hsla(var(--book-color),0.9) 70%,
            hsla(var(--book-color),0.8) 99%,
            hsla(var(--book-color),1) 100%
          );`,
        "book-gradient-3": `
          repeating-linear-gradient(
            -45deg,
            rgba(255,255,255, 0.1),
            rgba(255,255,255, 0.1) 1px,
            transparent 1px,
            transparent 6px
          ),
          linear-gradient(
            90deg,
            hsla(var(--book-color),1) 0%,
            hsla(var(--book-color),0.9) 10%,
            hsla(var(--book-color),0.9) 70%,
            hsla(var(--book-color),0.8) 99%,
            hsla(var(--book-color),1) 100%
          );`,
      },
      colors: {
        "book-color": "hsl(var(--book-color))",
      },
      fontFamily: {
        "book-serif": [
          "Palatino Linotype",
          "Palatino",
          "Palladio",
          "URW Palladio L",
          "Book Antiqua",
          "Baskerville",
          "Bookman Old Style",
          "Bitstream Charter",
          "Nimbus Roman No9 L",
          "Garamond",
          "Apple Garamond",
          "ITC Garamond Narrow",
          "New Century Schoolbook",
          "Century Schoolbook",
          "Century Schoolbook L",
          "Georgia",
          "serif",
        ],
        "book-sans": [
          "Frutiger",
          "Frutiger Linotype",
          "Univers",
          "Calibri",
          "Gill Sans",
          "Gill Sans MT",
          "Myriad Pro",
          "Myriad",
          "DejaVu Sans Condensed",
          "Liberation Sans",
          "Nimbus Sans L",
          "Tahoma",
          "Geneva",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        "book-cursive": ["Snell Roundhand", "Apple Chancery", "Brush Script MT", "cursive"],
        "book-fantasy": ["Luminari", "Trattatello", "Chalkduster", "fantasy"],
      },
    },
  },
  plugins: [],
};

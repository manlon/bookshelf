const pluckBookAttrs = (book) => {
  // https://stackoverflow.com/questions/25553910/one-liner-to-take-some-properties-from-object-in-es-6
  const {
    metrics: {
      statistics: { characters },
    },
    bibliography: {
      publication: { year },
      title,
      author: { name },
      languages,
      subjects,
    },
    metadata: { url, downloads, rank },
  } = book;

  return {
    title,
    author: name,
    year,
    url,
    characters,
    languages,
    subjects,
    downloads,
    rank,
  };
};

import classics from "./classics.json";
const APPROX_CHAR_PER_PAGE = 1277;
const plucked = classics.map((b) => pluckBookAttrs(b));
function uniqueByFrequency(arr) {
  const freqs = arr.reduce((acc, v) => {
    if (acc.has(v)) {
      acc.set(v, acc.get(v) + 1);
    } else {
      acc.set(v, 1);
    }
    return acc;
  }, new Map());
  return [...freqs.entries()].sort(([, a], [, b]) => b - a).map(([v]) => v);
}
const authors = uniqueByFrequency(plucked.map((b) => b.author));
const years = uniqueByFrequency(plucked.map((b) => b.year));
const bookArray = plucked.map(({ title, author, year, characters }) => {
  return [
    title,
    authors.indexOf(author),
    years.indexOf(year),
    Math.floor(characters / APPROX_CHAR_PER_PAGE),
  ];
}).flat();
function writeModule() {
  let mod = `
const authors=${JSON.stringify(authors)};
const years=${JSON.stringify(years)};
const bookArr=${JSON.stringify(bookArray)};
let books = [];
for (let i = 0; i < ${bookArray.length}; i += 4){ books.push(bookArr.slice(i, i + 4)); }
export default books.map(([t,a,y,p]) => {return {title: t, author: authors[a], year: years[y], pages: p}});
`;
  Bun.write("plucked-classics.js", mod);
}
writeModule();

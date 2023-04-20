const pluckBookAttrs = (book) => {
    // https://stackoverflow.com/questions/25553910/one-liner-to-take-some-properties-from-object-in-es-6
    const {
        metrics: {
            statistics: {
                characters
            }
        },
        bibliography: {
            publication: {
                year
            },
            title,
            author: {
                name
            },
            languages,
            subjects
        },
        metadata: {
            url,
            downloads,
            rank
        }
    } = book;

    return {
        title,
        author: name,
        year,
        // url,
        characters,
        // languages,
        // subjects,
        // downloads,
        // rank
    };
};

import classics from './classics.json'
const bookArray = classics.map((b) => {
    let {title, author, year, characters} = pluckBookAttrs(b);
    return [title, author, year, characters]
})
function writeModule(){
    let mod = `
const books=${JSON.stringify(bookArray)};
const bookObjs = books.map(([t,a,y,c]) => {return {title: t, author: a, year: y, characters: c}});
export default bookObjs;
`
    Bun.write('plucked-classics.js', mod);
}
writeModule()

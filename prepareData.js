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
        url, 
        characters,
        languages, 
        subjects,
        downloads, 
        rank
    };
};

module.exports = pluckBookAttrs;

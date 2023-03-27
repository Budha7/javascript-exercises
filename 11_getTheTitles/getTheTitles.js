const getTheTitles = function(books) {
    const arrayOfTheTitles = [];
    for(const book of books) {
        arrayOfTheTitles.push(book.title);
    }
    return arrayOfTheTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

const palindromes = function (words) {

    const reversedStrings = words.toLowerCase().replace(/[^a-z]/g, "");

    return reversedStrings.split("").reverse().join("").includes(reversedStrings);
};

// Do not edit below this line
module.exports = palindromes;

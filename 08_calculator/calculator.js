const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b
};

const sum = function (array) {
    let mySum = 0;
    for (const value of array) {
        mySum = value + mySum;
    }
    return mySum;
};

const multiply = function (array) {
    return array.reduce((a, b) => a * b);
};

const power = function (base, exponent) {
    return Math.pow(base, exponent);
};

const factorial = function (num) {
    if (num === 0) return 1;
    else {
        return (num * factorial(num - 1));
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};

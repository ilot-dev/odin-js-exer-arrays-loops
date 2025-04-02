const fibonacci = function(input) {
    let num = parseInt(input);
    if (num < 0) return 'OOPS';
    else if (num === 0 || num === 1) return num;

    const fibonacciArray = [0, 1];
    let fibonacciSum;
    for (let i = 1; i < num; ++i){
        fibonacciSum = fibonacciArray[i - 1] + fibonacciArray[i];
        fibonacciArray.push(fibonacciSum);
    }
    return fibonacciSum;
};

// Do not edit below this line
module.exports = fibonacci;

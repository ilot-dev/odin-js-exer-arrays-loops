const sumAll = function(int1, int2) {
    if (int1 >= 0 && int2 >= 0 && 
        Number.isInteger(int1) && 
        Number.isInteger(int2) &&
        !isNaN(int1) &&
        !isNaN(int2)) {
            let numberOfTerms = Math.abs(int2 - int1) + 1;

             // Formula for sum of consecutive numbers
            let sum = (numberOfTerms / 2) * (int1 + int2);
            return sum;
        } 
        else return 'ERROR';
    
};

// Do not edit below this line
module.exports = sumAll;

/* MY SOLUTION
const reverseString = function(text) {
    let reversedText = [];
    for (const letter of text) {
        reversedText.unshift(letter);
    }
    return reversedText.join('');
};
*/
const reverseString = function (string) {
    return string.split("").reverse().join("");
  };

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;

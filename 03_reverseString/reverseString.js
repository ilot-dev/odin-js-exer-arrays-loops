const reverseString = function(text) {
    let reversedText = [];
    for (const letter of text) {
        reversedText.unshift(letter);
    }
    return reversedText.join('');
};

// Do not edit below this line
module.exports = reverseString;

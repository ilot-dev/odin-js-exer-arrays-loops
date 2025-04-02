const palindromes = function (text) {
    const textWithoutPunctuation = [...text].filter(char => /[^\W_]/.test(char)).join('');
    const textLowerCase = textWithoutPunctuation.toLowerCase();
    const reversedTextLowerCase = textLowerCase.split('').reverse().join('');

    return textLowerCase === reversedTextLowerCase;
};

// Do not edit below this line
module.exports = palindromes;

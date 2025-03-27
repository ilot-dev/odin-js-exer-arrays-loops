const repeatString = function(text, num) {
    let repeatedText = '';
    for (let i = 0; i < num; i++) repeatedText += text;
    return repeatedText;
};

repeatString('hey', 3);
repeatString('hello', 10);
// Do not edit below this line
module.exports = repeatString;

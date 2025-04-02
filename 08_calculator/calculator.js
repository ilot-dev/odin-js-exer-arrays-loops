const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => product * num);
};

const power = function(num, exponent) {
  return num ** exponent;
};

const factorial = function(num) {
  if (num === 0) return 1;

  return num * factorial(--num);
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

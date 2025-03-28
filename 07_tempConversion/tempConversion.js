const convertToCelsius = function(temperature) {
  let celsiusTemp = (temperature - 32) / 1.8;
  let roundedCelsiusTemp = parseFloat(celsiusTemp.toFixed(1));
  return roundedCelsiusTemp;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheitTemp = temperature * 1.8 + 32;
  let roundedFahrenheitTemp = parseFloat(fahrenheitTemp.toFixed(1));
  return roundedFahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

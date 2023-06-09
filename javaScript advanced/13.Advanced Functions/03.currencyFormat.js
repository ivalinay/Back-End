function format(value, separator, symbol, symbolFirst) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + " " + result;
  else return result + " " + symbol;
};

console.log(format(5345, ",", "$", true, currencyFormatter)); // $ 5345,00
console.log(format(3.1429, ",", "$", true, currencyFormatter)); // $ 3,14
console.log(format(2.709, ",", "$", true, currencyFormatter)); // $ 2,71

const binaryArrayToNumber = arr => {
  return parseInt(arr, 2);
};

const numberDecimalToBinary = arr => {
  return parseInt(arr, 10).toString(2);
};

console.log(binaryArrayToNumber('1111'));
console.log(numberDecimalToBinary('15'));
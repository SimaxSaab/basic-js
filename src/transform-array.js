const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('Error');
  let newArr = [];
  for(let i = 0, len = arr.length; i < len; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (newArr.length > 0 && arr[i - 2] !== "--discard-next") {
          newArr.pop();
        }
        break;
      case '--double-next':
        if (i < len - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (newArr.length > 0 && arr[i - 2] !== "--discard-next") {
          newArr.push(arr[i - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
};

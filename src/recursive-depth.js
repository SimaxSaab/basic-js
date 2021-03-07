const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    // выделим массивы
    arr = arr.filter(item => Array.isArray(item));
    if (arr.length > 0) { // если они есть
      arr = arr.flat(); // то понизим вложенность
      depth += this.calculateDepth(arr);
    }
    return depth;
  }
};
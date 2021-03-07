const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      this.arr.push(``);
    } else {
      this.arr.push(`${value}`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' || this.arr.indexOf(`${position}`) !== -1) {
      this.arr.splice(position - 1, 1)
      return this;
    } else {
      this.arr = [];
      throw new Error('Error');
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.map(item => `( ${item} )`).join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = chainMaker;

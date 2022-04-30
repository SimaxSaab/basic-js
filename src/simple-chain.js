const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

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
    if (typeof position === 'number' && Number.isInteger(position) && position > 0 && position < this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!');
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

module.exports = {
  chainMaker
};

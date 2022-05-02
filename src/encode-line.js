const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine([...str]) {
  var aux = str, nonIter = 0;
  return str.map((item, i, a) => {
    if (i < nonIter) return;
    var num = 1;
    for (var j = 1; j < aux.length; j++) {
      if (item === aux[j]) {
        num++;
        nonIter = i + num;
      } else {
        aux = [ ...aux.slice(j)];
        j = aux.length;
      }
    }
    if (num === 1) return item;
    else return num + item;
  }).join('');
}

module.exports = {
  encodeLine
};

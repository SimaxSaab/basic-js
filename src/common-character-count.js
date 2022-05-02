const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount([...s1], [...s2]) {
  return s1.filter(item => {
    for (var i = 0; i < s2.length; i++) {
      if (item === s2[i]) {
        s2 = [...s2.slice(0, i), ...s2.slice(i + 1)];
        return true;
      }
    }
    return false;
  }).length;
}

module.exports = {
  getCommonCharacterCount
};

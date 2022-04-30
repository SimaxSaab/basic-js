const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  str += '';
  let addition = options.addition === undefined ? '' : String(options.addition);
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.separator === undefined) options.separator = '+';
  // доп строка
  let additionArr = new Array(options.additionRepeatTimes);
  let additionStr = additionArr.fill(addition).join(options.additionSeparator);
  // результирующая
  let resultArr = new Array(options.repeatTimes);
  return resultArr.fill(str + additionStr).join(options.separator);
};

module.exports = {
  repeater
};

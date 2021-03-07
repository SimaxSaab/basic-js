const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
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
  
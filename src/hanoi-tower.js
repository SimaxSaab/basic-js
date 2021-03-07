const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const TURNS = Math.pow(2, disksNumber) - 1, SECONDS = Math.floor(TURNS / turnsSpeed * 3600);
  return { turns: TURNS, seconds: SECONDS }
};

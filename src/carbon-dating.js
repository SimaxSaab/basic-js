const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

// module.exports = 
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' ) return false;
  const SA = parseFloat(sampleActivity);
  if (SA == false) return false;
  let age = Math.ceil((Math.log(MODERN_ACTIVITY / SA)) / k);
  return age > 0 ? age : false;
};

module.exports = {
  dateSample
};

const { NotImplementedError } = require('../extensions/index.js');

// module.exports = 
function countCats(matrix) {
  let res = 0;
  for(let i = 0, lenM = matrix.length; i < lenM; i++) {
    for(let j = 0, lenA = matrix[i].length; j < lenA; j++) {
      if(matrix[i][j] == '^^') res++;
    }
  }
  return res;
};

module.exports = {
  countCats
};

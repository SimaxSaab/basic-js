const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let team = [];
  members.forEach(item => {
    if(typeof item === 'string') {
      team.push(item.trim().charAt(0).toUpperCase());
    }
  });
  return team.sort().join(''); 
};

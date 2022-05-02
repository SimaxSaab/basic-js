const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  var arrDom = [], objRes = {};

  domains.forEach(item => {
    var arrAux = item.split('.').reverse().map(item => `.${item}`);
    arrAux.forEach((item, i, a) => {
      objRes[`${a.slice(0, (i + 1)).join('')}`] = 0;
    });
    arrDom.push(arrAux.join(''));
  });

  arrDom.forEach(itemDom => { 
    for (var key in objRes) {
      objRes[key] = objRes[key] + (itemDom.includes(key) ? 1 : 0);
    }
  });

  return objRes;
}

module.exports = {
  getDNSStats
};

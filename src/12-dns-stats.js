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
  const dns = {};

  for (let i = 0; i < domains.length; i++) {
    const array = domains[i]
      .split('.')
      .reverse()
      .map((x) => `.${x}`);
    array.reduce((acc, cur, index) => {
      if (index === 1) {
        dns[acc] = (dns[acc] || 0) + 1;
      }
      dns[acc + cur] = (dns[acc + cur] || 0) + 1;
      return acc + cur;
    });
  }
  return dns;
}

module.exports = getDNSStats;

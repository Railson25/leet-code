/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  let sign = 1;
  let result = 0;

  const INT_MIN = -1 * 2 ** 31;
  const INT_MAX = 2 ** 31 - 1;

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }

  while (s[i] >= "0" && s[i] <= "9") {
    let digit = s[i].charCodeAt(0) - "0".charCodeAt(0);
    result = result * 10 + digit;
    i++;
  }

  result = result * sign;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
};

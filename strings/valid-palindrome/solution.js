/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  function isAlnum(ch) {
    let isDigit = ch >= "0" && ch <= "9";
    let isUpper = ch >= "A" && ch <= "Z";
    let isLower = ch >= "a" && ch <= "z";

    return isDigit || isUpper || isLower;
  }

  function toLower(ch) {
    if (ch >= "A" && ch <= "Z") {
      let code = ch.charCodeAt(0);
      let lowerCode = code + 32;

      return String.fromCharCode(lowerCode);
    }

    return ch;
  }

  while (i < j) {
    while (i < j && !isAlnum(s[i])) {
      i++;
    }

    while (i < j && !isAlnum(s[j])) {
      j--;
    }

    if (i >= j) {
      break;
    }

    let left = toLower(s[i]);
    let right = toLower(s[j]);

    if (left !== right) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let current = "1";

  for (let i = 1; i < n; i++) {
    let next = "";
    let count = 1;

    for (let j = 1; j <= current.length; j++) {
      if (current[j] === current[j - 1]) {
        count++;
      } else {
        next += count.toString();
        next += current[j - 1];
        count = 1;
      }
    }

    current = next;
  }

  return current;
};

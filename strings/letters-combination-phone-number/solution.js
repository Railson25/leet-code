/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];

  if (digits === "") return [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result[result.length] = path;
      return;
    }

    const digit = digits[index];
    const letters = map[digit];

    let i = 0;

    while (i < letters.length) {
      backtrack(index + 1, path + letters[i]);
      i++;
    }
  }

  backtrack(0, "");
  return result;
};

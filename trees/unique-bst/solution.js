/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const uniqueBSTs = [];

  uniqueBSTs[0] = 1;
  uniqueBSTs[1] = 1;

  for (let i = 2; i <= n; i++) {
    uniqueBSTs[i] = 0;
    for (let j = 1; j <= i; j++) {
      const leftSubTree = j - 1;
      const rightSubTree = i - j;

      const combinations = uniqueBSTs[leftSubTree] * uniqueBSTs[rightSubTree];

      uniqueBSTs[i] += combinations;
    }
  }
  return uniqueBSTs[n];
};

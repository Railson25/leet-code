/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];

  cache = [];

  for (let i = 0; i <= n; i++) {
    cache[i] = [];
  }

  function buildTrees(start, end) {
    if (cache[start] !== undefined && cache[start][end] !== undefined) {
      return cache[start][end];
    }

    const result = [];
    let resultIndex = 0;

    if (start > end) {
      result[0] = null;
      if (cache[start] === undefined) {
        cache[start] = [];
      }
      cache[start][end] = result;
      return result;
    }

    for (let i = start; i <= end; i++) {
      const leftTrees = buildTrees(start, i - 1);
      const rightTrees = buildTrees(i + 1, end);

      for (let l = 0; l < leftTrees.length; l++) {
        for (let r = 0; r < rightTrees.length; r++) {
          var node = {
            val: i,
            left: leftTrees[l],
            right: rightTrees[r],
          };

          result[resultIndex] = node;
          resultIndex++;
        }
      }
    }
    cache[start][end] = result;
    return result;
  }

  return buildTrees(1, n);
};

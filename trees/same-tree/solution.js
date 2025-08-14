/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function same(a, b) {
    if (a === null && b === null) {
      return true;
    }

    if (a === null || b === null) {
      return false;
    }

    if (a.val !== b.val) {
      return false;
    }

    var leftSame = same(a.left, b.left);

    if (leftSame === false) {
      return false;
    }

    var rightSame = same(a.right, b.right);

    return rightSame;
  }

  return same(p, q);
};

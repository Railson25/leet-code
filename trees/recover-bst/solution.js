/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  var first = null;
  var second = null;
  var prev = null;

  var curr = root;

  while (curr !== null) {
    if (curr.left === null) {
      if (prev !== null) {
        if (prev.val > curr.val) {
          if (first === null) {
            first = prev;
          }

          second = curr;
        }
      }

      prev = curr;
      curr = curr.right;
    } else {
      var pred = curr.left;

      while (pred.right !== null && pred.right !== curr) {
        pred = pred.right;
      }

      if (pred.right === null) {
        pred.right = curr;
        curr = curr.left;
      } else {
        pred.right = null;

        if (prev !== null) {
          if (prev.val > curr.val) {
            if (first === null) {
              first = prev;
            }
            second = curr;
          }
        }

        prev = curr;
        curr = curr.right;
      }
    }
  }

  if (first !== null && second !== null) {
    var temp = first.val;
    first.val = second.val;
    second.val = temp;
  }
};

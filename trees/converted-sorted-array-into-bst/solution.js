/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function buildTree(leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return null;

    let mid = Math.floor((leftIndex + rightIndex) / 2);

    let node = {
      val: nums[mid],
      left: null,
      right: null,
    };

    node.left = buildTree(leftIndex, mid - 1);
    node.right = buildTree(mid + 1, rightIndex);

    return node;
  }

  return buildTree(0, nums.length - 1);
};

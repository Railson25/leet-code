/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  var n = nums.length;
  var i = n - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i = i - 1;
  }

  if (i >= 0) {
    var j = n - 1;

    while (j >= 0 && nums[j] <= nums[i]) {
      j = j - 1;
    }

    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  var left = i + 1;
  var right = n - 1;

  while (left < right) {
    var tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;

    left = left + 1;
    right = right - 1;
  }
};

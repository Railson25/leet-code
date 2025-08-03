/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  let closestSum = 0;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      let diff = currentSum - target;
      let absDiff;

      if (diff < 0) {
        absDiff = -diff;
      } else {
        absDiff = diff;
      }

      if (absDiff < minDiff) {
        minDiff = absDiff;
        closestSum = currentSum;
      }

      if (diff === 0) {
        return currentSum;
      } else if (diff < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};

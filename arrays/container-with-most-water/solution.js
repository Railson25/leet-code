/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let minHeight;

    if (height[left] < height[right]) {
      minHeight = height[left];
    } else {
      minHeight = height[right];
    }

    let currentArea = width * minHeight;

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

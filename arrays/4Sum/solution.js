/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  function quickSort(arr, low, high) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
  }

  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    const temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
  }
  const n = nums.length;
  quickSort(nums, 0, n - 1);

  const result = new Array(10000);
  let resIndex = 0;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          const quad = new Array(4);

          quad[0] = nums[i];
          quad[1] = nums[j];
          quad[2] = nums[left];
          quad[3] = nums[right];

          result[resIndex] = quad;
          resIndex++;

          const leftVal = nums[left];
          const rightVal = nums[right];

          while (left < right && nums[left] === leftVal) left++;
          while (left < right && nums[right] === rightVal) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  const output = new Array(resIndex);

  for (let i = 0; i < resIndex; i++) {
    output[i] = result[i];
  }

  return output;
};

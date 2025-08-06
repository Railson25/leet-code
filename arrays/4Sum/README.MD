# 🎯 4Sum (Manual Quick Sort & Two Pointers)

This JavaScript algorithm finds **all unique quadruplets** in an array that sum up to a given `target`.  
It uses **manual Quick Sort** (no `.sort()` or `.push()`) and a **two-pointer technique**, all implemented **without built-in JavaScript methods**.

---

## 🧠 Objective

Given an array of integers `nums` and an integer `target`, return all unique quadruplets `[a, b, c, d]` such that:

- `a + b + c + d == target`
- `0 <= a, b, c, d < nums.length`
- All indices are distinct.
- The solution set does not contain duplicate quadruplets.

---

## ⚙️ How It Works

1. **Sort the array** using manual Quick Sort (no `.sort()`).
2. Use **two nested loops** (`i` and `j`) to fix the first two numbers.
3. Use **two pointers** (`left` and `right`) to find the other two numbers.
4. Skip duplicates manually by comparing with previous values.
5. Store each valid quadruplet manually using `result[index] = [a, b, c, d]`.
6. Return a trimmed output array containing only the valid combinations.

---

## 📥 Input Example

```js
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
```

## 📤 Expected Output

[
[-2, -1, 1, 2],
[-2, 0, 0, 2],
[-1, 0, 0, 1]
]

## 🔍 Step-by-Step Execution

After Quick Sort:

Sorted: [-2, -1, 0, 0, 1, 2]

## Loop with i = 0 (nums[i] = -2), j = 1 (nums[j] = -1):

left = 2 (0), right = 5 (2)
sum = -2 + -1 + 0 + 2 = -1 → too small → move left

left = 3 (0), right = 5 (2)
sum = -2 + -1 + 0 + 2 = -1 → too small → move left

left = 4 (1), right = 5 (2)
sum = -2 + -1 + 1 + 2 = 0 → valid quadruplet → store [-2, -1, 1, 2]

## 📊 Time and Space Complexity

| Type     | Complexity |
| -------- | ---------- |
| ⏱ Time   | O(n³)      |
| 💾 Space | O(n³)      |

**Time:**

- The initial sorting step takes `O(n log n)` (Quick Sort).
- The nested loops (`i`, `j`, and two pointers) make the overall complexity `O(n³)`.

**Space:**

- We use a fixed-size result array of up to `O(n³)` in the worst case (if many unique quadruplets are found).
- No additional data structures like sets or maps are used, only primitive arrays.

# 🔺 3Sum

This JavaScript algorithm finds all unique triplets in an array that sum to zero, using a manual bubble sort and two-pointer technique — all implemented **without any built-in JS methods**.

---

## 🧠 Objective

Given an array of integers `nums`, the algorithm returns all unique triplets `[nums[i], nums[j], nums[k]]` such that:

- `i != j`, `i != k`, and `j != k`
- `nums[i] + nums[j] + nums[k] == 0`
- No duplicate triplets appear in the output

---

## ⚙️ How It Works

1. **Bubble sort** is used to sort the array manually
2. Loop through each number `i` and fix it as the first number of a triplet
3. Use **two pointers** (`left` and `right`) to find the other two numbers
4. Skip duplicates with `continue` and `while` checks
5. Store only the valid triplets in a result array without using `.push()`

---

## 📥 Input Example

````js
const nums = [-1, 0, 1, 2, -1, -4];


## 📤 Expected Output

[[-1, -1, 2], [-1, 0, 1]]


## 🔍 Execution Step-by-Step

**Input:**

```js
[-1, 0, 1, 2, -1, -4]
````

## After bubble sort:

```js
[-4, -1, -1, 0, 1, 2];
```

## 🔍 Looping through `i`

- `i = 0`: test triplets with `left = 1`, `right = 5` → no valid triplet

- `i = 1`: two valid triplets found:
  ```js
  [-1, -1, 2][(-1, 0, 1)];
  ```

```

- `i = 2`: skipped (duplicate `-1`)

- `i = 3`: test triplet `[0, 1, 2]` → invalid (sum ≠ 0)

- `i = 4`: `left === right` → skip

---

**Final count:** `2`
**Array `finalResult` created and filled manually.**
```

## 📊 Time and Space Complexity

Time O(n²)
Space O(n²)

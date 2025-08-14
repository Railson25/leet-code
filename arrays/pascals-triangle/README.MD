# 🎯 Pascal's Triangle (Manual Row Construction)

This JavaScript algorithm generates the **first `numRows` of Pascal’s Triangle** using manual row-by-row construction,  
without relying on built-in array methods like `.push()` for building the triangle.

---

## 🧠 Objective

Given an integer `numRows`, return a 2D array (matrix) representing the first `numRows` of **Pascal's Triangle**, where:

- The first and last numbers in each row are always `1`.
- Each interior number is the sum of the two numbers directly above it in the previous row.

---

## ⚙️ How It Works

1. **Create an empty matrix** `result` to store all rows.
2. Loop from `i = 0` to `i = numRows - 1`:
   - Create an empty array `row` for the current line.
   - For each position `j` in the row:
     - If `j === 0` or `j === i` → set `row[j] = 1` (borders).
     - Otherwise → set `row[j] = result[i - 1][j - 1] + result[i - 1][j]` (sum of two numbers above).
   - Store the `row` in `result[i]`.
3. Return the `result` matrix.

---

## 📥 Input Example

```js
const numRows = 5;
```

## 📤 Expected Output

[
[1],
[1, 1],
[1, 2, 1],
[1, 3, 3, 1],
[1, 4, 6, 4, 1]
]

## 🔍 Step-by-Step Execution

**i = 0:**  
`row = [1]` → `result = [[1]]`

**i = 1:**  
`row = [1, 1]` → `result = [[1], [1, 1]]`

**i = 2:**

- `j = 0` → `1`
- `j = 1` → `1 + 1 = 2`
- `j = 2` → `1`  
  `row = [1, 2, 1]` → `result = [[1], [1, 1], [1, 2, 1]]`

**i = 3:**  
`row = [1, 3, 3, 1]` → `result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]`

**i = 4:**  
`row = [1, 4, 6, 4, 1]` → `result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]`

## 📊 Time and Space Complexity

| Type     | Complexity |
| -------- | ---------- |
| ⏱ Time   | O(n²)      |
| 💾 Space | O(n²)      |

**Time:**

- The outer loop runs `n` times.
- The inner loop runs up to `i` times for each row, resulting in approximately `n(n+1)/2` iterations ⇒ **O(n²)**.

**Space:**

- We store all rows in the `result` matrix, which contains approximately `n(n+1)/2` numbers ⇒ **O(n²)** space.

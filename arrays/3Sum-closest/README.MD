# 🎯 3Sum Closest

This JavaScript algorithm finds the **sum of three integers** in an array that is **closest** to a given target value. It uses **manual Bubble Sort** and a **two-pointer technique**, all implemented **without using any built-in JavaScript methods**.

---

## 🧠 Objective

Given an array of integers `nums` and an integer `target`, return the sum of three integers in `nums` such that the sum is **closest to `target`**.

You may assume that each input has **exactly one solution**.

---

## ⚙️ How It Works

1. **Sort the array** using manual Bubble Sort (no `.sort()`).
2. Use a `for` loop to fix the first number of the triplet.
3. Use two pointers (`left`, `right`) to search for the remaining two numbers.
4. Calculate the current sum of the triplet and compare its **absolute difference** to the target.
5. Update the closest sum if a smaller difference is found.
6. If the difference is exactly zero, return the current sum immediately.

---

## 📥 Input Example

```js
const nums = [-1, 2, 1, -4];
const target = 1;
```

## 📤 Expected Output

2

## 🔍 Step-by-Step Execution

After Bubble Sort:

### Loop with `i = 0` (fixing `-4`)

```txt
left = 1 (-1), right = 3 (2)

currentSum = -4 + (-1) + 2 = -3
diff = -3 - 1 = -4
absDiff = 4
closestSum = -3 (best so far)

Move left → 2 (1)

currentSum = -4 + 1 + 2 = -1
diff = -1 - 1 = -2
absDiff = 2
closestSum = -1 (best so far)
```

## 📊 Time and Space Complexity

| Type     | Complexity |
| -------- | ---------- |
| ⏱ Time   | O(n²)      |
| 💾 Space | O(1)       |

**Time:** One outer loop (`i`) and one inner loop using two pointers ⇒ `O(n²)`  
**Space:** Only constant auxiliary variables are used, so it's `O(1)`

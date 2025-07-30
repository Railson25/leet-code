# 💧 Container With Most Water

This JavaScript algorithm calculates the maximum amount of water that can be contained between two vertical lines represented by an array of heights.

---

## 🧠 Objective

Given an array of integers `height`, where each element represents the height of a vertical line, the algorithm finds two lines that, together with the x-axis, form a container that holds the **maximum amount of water**.

The amount of water depends on:

- The **distance** between the two indices (width)
- The **shorter** of the two heights

---

## 📐 How Area Is Calculated

The area between lines at indices `i` and `j` is computed using:

Area = (j - i) \* min(height[i], height[j])

---

## 📥 Input Example

```js
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

## 📤 Expected Output

49

## 📊 Time and Space Complexity

Time	O(n)
Space	O(1)

The algorithm uses a two-pointer approach, scanning the array only once, and requires only constant auxiliary space.
```

# 🌲 Symmetric Tree

This JavaScript algorithm checks whether a binary tree is a **mirror of itself** (symmetric around its center), using a recursive depth-first search — implemented **without any built-in JS methods**.

---

## 🧠 Objective

Given the root of a binary tree `root`, return `true` if it is symmetric, and `false` otherwise.

A tree is symmetric if the left subtree is a **mirror reflection** of the right subtree.

---

## ⚙️ How It Works

1. Define a helper function `isMirror(a, b)` that checks if two subtrees are mirrors:
   - If both nodes are `null` → symmetric at this branch
   - If one is `null` and the other is not → not symmetric
   - If values differ → not symmetric
2. Recursively compare:
   - Left child of `a` with right child of `b`
   - Right child of `a` with left child of `b`
3. The whole tree is symmetric if `isMirror(root.left, root.right)` returns true.

---

## 📥 Input Example

```js
root = [1, 2, 2, 3, 4, 4, 3];
```

## 📤 Expected Output

true

## 🔍 Execution Step-by-Step

**Example 1:**

`root = [1,2,2,3,4,4,3]`

- Compare 2 (left) with 2 (right) → ✅ ok
- Compare 3 (left-left) with 3 (right-right) → ✅ ok
- Compare 4 (left-right) with 4 (right-left) → ✅ ok  
  **✅ Symmetric → true**

---

**Example 2:**

`root = [1,2,2,null,3,null,3]`

- Compare 2 (left) with 2 (right) → ✅ ok
- Compare null (left-left) with 3 (right-right) → ❌ mismatch → false

---

**Example 3:**

`root = [1]`

Single node is always symmetric → **true**

## 📊 Time and Space Complexity

**Time:** `O(n)`  
Each node is visited once in its pair comparison.

**Space:** `O(h)`  
Where `h` is the height of the tree (recursion stack).

- **Best case** (balanced): `O(log n)`
- **Worst case** (skewed): `O(n)`

# 🌳 Same Tree

This JavaScript algorithm checks whether two binary trees are identical in both **structure** and **node values**, using a recursive depth-first search — implemented **without any built-in JS methods**.

---

## 🧠 Objective

Given the roots of two binary trees `p` and `q`, return `true` if they are the same tree, and `false` otherwise.

Two binary trees are considered the same if:

- They have the same shape (structure)
- All corresponding nodes have the same value

---

## ⚙️ How It Works

1. Start comparing the two root nodes
2. **Base cases**:
   - Both nodes are `null` → trees match at this branch
   - One is `null` and the other is not → trees differ
   - Values are different → trees differ
3. Recursively check:
   - Left children
   - Right children (only if left children matched)
4. Return `true` only if both sides match

---

## 📥 Input Example

```js
p = [1, 2, 3];
q = [1, 2, 3];
```

## 📤 Expected Output

true

## 🔍 Execution Step-by-Step

**Example 1:**

`p = [1, 2, 3]`  
`q = [1, 2, 3]`

- Compare roots `1` and `1` → ✅ ok
- Compare left children `2` and `2` → ✅ ok
- Compare right children `3` and `3` → ✅ ok  
  **✅ Trees match → `true`**

---

**Example 2:**

`p = [1, 2]`  
`q = [1, null, 2]`

- Compare roots `1` and `1` → ✅ ok
- Compare left children `2` and `null` → ❌ mismatch → stop → `false`

---

**Example 3:**

`p = [1, 2, 1]`  
`q = [1, 1, 2]`

- Compare roots `1` and `1` → ✅ ok
- Compare left children `2` and `1` → ❌ mismatch → stop → `false`

## 📊 Time and Space Complexity

**Time:** `O(n)`  
Where `n` is the number of nodes visited in both trees. Each pair of nodes is checked exactly once.

**Space:** `O(h)`  
Where `h` is the height of the tree (due to the recursion stack).

- **Best case** (balanced tree): `O(log n)`
- **Worst case** (skewed tree): `O(n)`

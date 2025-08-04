# 🌳 Unique Binary Search Trees II

This JavaScript algorithm generates **all structurally unique binary search trees (BSTs)** that can be built using values from `1` to `n`.

---

## 🧠 Objective

Given an integer `n`, return **all unique BSTs** (not just the count) that can be built with values `1` through `n`.

Each BST must follow the **binary search tree rules**:

- Left subtree contains only values **less than** the root.
- Right subtree contains only values **greater than** the root.
- All trees must be **structurally unique** (different shape = different tree).

---

## 📥 Input Example

```js
generateTrees(3);
```

## 📤 Output Example

The function returns an array of tree structures like:

```js
[
  {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  },
  {
    val: 1,
    left: null,
    right: { val: 3, left: { val: 2, left: null, right: null }, right: null },
  },
  {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  {
    val: 3,
    left: { val: 1, left: null, right: { val: 2, left: null, right: null } },
    right: null,
  },
  {
    val: 3,
    left: { val: 2, left: { val: 1, left: null, right: null }, right: null },
    right: null,
  },
];
```

## 🌱 Tree Visualizations for n = 3

```
Tree 1:       Tree 2:       Tree 3:       Tree 4:       Tree 5:

    1             1             2             3             3
     \             \           / \           /             /
      2             3         1   3         1             2
       \           /                           \         /
        3         2                             2       1
```

### ⚙️ How It Works

This solution uses **pure recursion** with **manual memoization**  
(no JS methods like `.push()` or `Map`).

It defines a recursive function `buildTrees(start, end)` which:

- Picks every number `i` from `start` to `end` as a potential **root**.
- Recursively generates all **left subtrees** using values `< i`.
- Recursively generates all **right subtrees** using values `> i`.
- Combines **each left/right pair** with root `i` to form a new tree.
- Uses a `cache[start][end]` array to avoid recomputing subtrees.

---

### 🧱 Manual Memoization Strategy

- A 2D array `cache[start][end]` is used to store the result of each subproblem.
- Before computing `buildTrees(start, end)`, we check if it’s already in cache.
- Results are stored manually using `result[index] = value` (no `.push()`).

### 📊 Time and Space Complexity

---

#### ⏱ Time Complexity: `O(n² × Cₙ)`

- There are `O(n²)` unique `(start, end)` subproblems.
- Each subproblem may generate up to `Cₙ` unique trees.
- Building each tree takes up to `O(n)` time.

> **Catalan Number:**  
> \[
> C_n = \frac{1}{n + 1} \binom{2n}{n}
> \]

---

#### 💾 Space Complexity: `O(n × Cₙ)`

- Stores `Cₙ` unique trees.
- Each tree has up to `n` nodes.
- Stack space due to recursion is `O(n)`, but the total output dominates.

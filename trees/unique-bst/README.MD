# 🌳 Unique Binary Search Trees

This JavaScript algorithm calculates how many **structurally unique binary search trees (BSTs)** can be constructed using values from `1` to `n`.

---

## 🧠 Objective

Given an integer `n`, return the number of **distinct BSTs** that store values from `1` to `n`, where:

- Each BST must follow the **binary search tree property**:
  - Left subtree contains only nodes with values less than the root.
  - Right subtree contains only nodes with values greater than the root.
- BSTs must be **structurally unique** (different shapes count as different trees).

---

## 📥 Input Example

````js
numTrees(3);
## 📤 Expected Output
5

## 🌳 BST Visualizations for n = 3
These are the 5 unique BSTs that can be constructed using [1, 2, 3]:

1           1           2           3           3
 \           \         / \         /           /
  2           3       1   3       2           1
   \         /                       \           \
    3       2                         1           2

## ⚙️ How It Works

This algorithm uses **dynamic programming** to calculate the result.

We define an array `uniqueBSTs`, where:

- `uniqueBSTs[i]` holds the number of unique BSTs that can be formed using `i` nodes.

### 🧱 Base cases:

- `uniqueBSTs[0] = 1` → an empty tree is a valid BST.
- `uniqueBSTs[1] = 1` → only one way to form a tree with one node.

---

### 🔁 For each total number of nodes `i`, we try each value `j` as the root:

- Nodes to the left of `j` → `j - 1`
- Nodes to the right of `j` → `i - j`

Then we calculate:

```js
combinations = uniqueBSTs[j - 1] * uniqueBSTs[i - j]
uniqueBSTs[i]```

## 📊 Time and Space Complexity

### ⏱ Time Complexity: `O(n²)`

- Outer loop runs from `2` to `n` → `O(n)`
- Inner loop runs up to `i` → `O(n)`
- **Total = O(n²)**

---

### 💾 Space Complexity: `O(n)`

- Uses one array of size `n + 1` to store intermediate results.
````

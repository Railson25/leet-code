# 📐 sortedArrayToBST

This JavaScript algorithm converts a **sorted** (in ascending order) array of integers into a **balanced binary search tree (BST)**.

---

## 🧠 Objective

Build a height-balanced binary search tree where:

- For each node, all values in the left subtree are **less** than the node.
- All values in the right subtree are **greater** than the node.
- The tree is **height-balanced**, meaning the depths of the two subtrees never differ by more than 1.

---

## 📥 Input Example

```js
const nums = [-10, -3, 0, 5, 9];
```

## 📤 Expected Output

The generated tree would be:

        0
       / \
    -10   5
      \    \
      -3    9

## 📊 Time and Space Complexity

Time O(n)
Space O(n)

Each element is processed once to build the tree recursively.
A new tree node is allocated for each value.

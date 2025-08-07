# ✅ Validate Binary Search Tree

This JavaScript algorithm **checks whether a binary tree is a valid Binary Search Tree (BST)**.  
It uses recursion with value boundaries to verify that all nodes follow the BST rules.

---

## 🧠 Objective

Given the `root` of a binary tree, determine if it is a **valid BST**, where:

- The **left subtree** of a node contains only values **less than** the node's value.
- The **right subtree** contains only values **greater than** the node's value.
- **Both** subtrees must also be valid BSTs.

---

## 🏗️ TreeNode Definition

```js
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
```

## 🧩 Function Signature

/\*\*

- @param {TreeNode} root
- @return {boolean}
  \*/
  var isValidBST = function(root) { ... }
  \*\*/

## 📥 Input Example

const root = new TreeNode(2,
new TreeNode(1),
new TreeNode(3)
);

isValidBST(root); // ✅ true

    2

/ \
 1 3

✅ Valid BST:

1 < 2

3 > 2

Left and right subtrees are valid.

## ❌ Invalid Input Example

const root = new TreeNode(5,
new TreeNode(1),
new TreeNode(4, new TreeNode(3), new TreeNode(6))
);

isValidBST(root); // ❌ false

    5

/ \
 1 4
/ \
 3 6

❌ Invalid BST:

Node 4 is on the right of 5 → should be > 5

But its left child is 3 → which violates the BST property.

# ⚙️ How It Works

The algorithm uses recursion to traverse the tree while maintaining min and max bounds.

function validate(node, min, max) {
if (node === null) return true;
if (node.val <= min || node.val >= max) return false;

return (
validate(node.left, min, node.val) &&
validate(node.right, node.val, max)
);
}

return validate(root, -Infinity, Infinity);

### ✅ Step-by-Step

For each node:

- ✅ Check if `node.val` is **between** `min` and `max`
- 🔁 Recurse left with `max = node.val`
- 🔁 Recurse right with `min = node.val`

## 📊 Time and Space Complexity

### ⏱ Time Complexity: `O(n)`

- Each node is visited **exactly once**

### 💾 Space Complexity: `O(h)`

- Where `h` is the **height** of the tree.
- Worst case: `O(n)` (completely unbalanced / skewed tree)
- Best case: `O(log n)` (perfectly balanced tree)

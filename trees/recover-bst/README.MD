# 🌳 `recoverTree` (Recover Binary Search Tree)

This JavaScript algorithm fixes a **Binary Search Tree (BST)** where **exactly two nodes** have been swapped by mistake.  
The tree structure must remain the same — only the node values are swapped back to their correct places.

---

## 🧠 Objective

Given the `root` of a BST, restore it so that it satisfies the **BST property**:

- Left subtree contains only values **less than** the root
- Right subtree contains only values **greater than** the root

We must do this **in-place** and, for the follow-up, in **O(1)** extra space.

---

## 📜 Key Insight

If we traverse a valid BST **in-order**, the values appear in **strictly increasing order**.  
When two nodes are swapped, the in-order traversal will show **one or two "inversions"** where the sequence is out of order.

---

## 🛠️ How the Algorithm Works

```txt
1. Initialize pointers:
   - first, second → nodes to swap
   - prev → last visited node
   - curr → start at root

2. While curr is not null:
   a. If curr has no left child:
      - Compare prev with curr to detect inversion
      - Update first/second if needed
      - Move curr to curr.right
   b. Else:
      - Find predecessor (rightmost node in curr.left)
      - If predecessor.right is null:
          * Make predecessor.right = curr (thread)
          * Move curr to curr.left
        Else:
          * Remove the thread (predecessor.right = null)
          * Visit curr (compare with prev)
          * Move curr to curr.right

3. After traversal, swap values of first and second
```

## 📥 Input Example

const root = [1, 3, null, null, 2];

## 📤 Expected Output

[3, 1, null, null, 2];

## 🔎 Step-by-Step Breakdown for [1,3,null,null,2]

In-order before fix:

3, 2, 1
1st inversion: 3 > 2 → first = 3, second = 2

2nd inversion: 2 > 1 → second = 1 (update)

Swap: first (3) ↔ second (1)

In-order after fix:

1, 2, 3

## 📊 Time and Space Complexity

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n)       |
| Space | O(1)       |

**Time:** Each node is visited at most twice (create and remove thread)  
**Space:** Only a few pointers are used — no stack or recursion needed

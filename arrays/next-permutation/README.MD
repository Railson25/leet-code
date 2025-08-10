# 🔢 `nextPermutation` (Next Lexicographical Permutation)

This JavaScript algorithm rearranges an array of integers into the **next lexicographically greater permutation**.  
If such arrangement is not possible (array is in descending order), it rearranges the array into the **lowest possible order** (ascending).

---

## 🧠 Objective

Given an array of integers `nums`:

- Find the **next permutation** of `nums` in lexicographical order.
- Perform the transformation **in-place**.
- Use **only constant extra memory**.

---

## 📜 Key Insight

- The **next permutation** can be found by:
  1. Identifying a **pivot** — the first element from the right that is **smaller** than its next element.
  2. Finding the **rightmost successor** to the pivot — the smallest element larger than the pivot to the right.
  3. Swapping the pivot and the successor.
  4. Reversing the suffix (elements to the right of the pivot) to get the smallest order for that part.

---

## 🛠️ How the Algorithm Works

```txt
1. Start from the second last index (i = n - 2) and move left
   until finding nums[i] < nums[i + 1]
   → This is the pivot index.

2. If pivot exists (i >= 0):
   a. From the last index (j = n - 1), move left until finding nums[j] > nums[i]
   b. Swap nums[i] and nums[j]

3. Reverse the subarray from i + 1 to the end (right = n - 1) to ensure
   the suffix is in ascending order.

4. If no pivot was found (array was descending),
   reversing the whole array produces the smallest permutation.
```

## 📥 Input Example

const nums = [1, 2, 3];
nextPermutation(nums);

## 📤 Expected Output

[1, 3, 2]

## 🔎 Step-by-Step Breakdown for `[1, 2, 3]`

1. **Find pivot:** `i = 1` (`nums[1] = 2`), because `2 < 3`
2. **Find successor:** `j = 2` (`nums[2] = 3`), because `3 > 2`
3. **Swap:** `[1, 3, 2]`
4. **Reverse suffix** from index `2` to `2` (no change)

**Final result:** `[1, 3, 2]` ✅

---

## 📊 Time and Space Complexity

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n)       |
| Space | O(1)       |

**Time:** Each step (finding pivot, finding successor, reversing suffix) is O(n) in total.  
**Space:** Only a few variables for indices and swapping — no extra arrays used.

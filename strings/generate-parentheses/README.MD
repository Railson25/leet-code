# 🔢 `generateParenthesis` (Generate Well-Formed Parentheses)

This JavaScript algorithm generates **all possible combinations** of well-formed parentheses given `n` pairs.  
It uses **backtracking** to explore valid sequences while avoiding invalid ones during construction.

---

## 🧠 Objective

Given an integer `n`, return **all valid combinations** of `n` pairs of parentheses.

A sequence is valid if:

- It contains exactly `n` `'('` and `n` `')'`.
- At no point in the sequence do closing parentheses `')'` exceed opening parentheses `'('`.

---

## 📏 Example Rules

For `n = 3`, valid outputs include:

((()))
(()())
(())()
()(())
()()()

Invalid examples:

- `())(()` → closes too early
- `((()` → not enough closing parentheses

---

## 🛠️ How the Algorithm Works

```txt
1. Create a buffer (array) of size 2n to store characters during construction.
2. Start recursion with pos = 0, open = 0, close = 0.
3. At each position:
   a. If open < n → place '(' and recurse.
   b. If close < open → place ')' and recurse.
4. When pos === 2n → convert buffer to string and save it.
5. After recursion ends, return all saved strings.
```

## 📥 Input Example

const n = 3;

## 📤 Expected Output

["((()))","(()())","(())()","()(())","()()()"]

## 🔎 Step-by-Step Breakdown for n = 2

1. Start: pos=0, open=0, close=0 → add `'('`
2. pos=1, open=1, close=0 → add `'('`
3. pos=2, open=2, close=0 → can't add `'('`, add `')'`
4. pos=3, open=2, close=1 → add `')'`
5. **Found:** `(())`
6. Backtrack to pos=1, open=1, close=0 → add `')'`
7. pos=2, open=1, close=1 → add `'('`
8. pos=3, open=2, close=1 → add `')'`
9. **Found:** `()()`

**Output:**

```js
["(())", "()()"];
```

## 📊 Time and Space Complexity

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(k · n)   |
| Space | O(k · n)   |

Where:

- `n` = input number of pairs
- `k` = total number of valid combinations (n-th Catalan number)

Auxiliary space (without output) is `O(n)` for recursion stack + buffer.

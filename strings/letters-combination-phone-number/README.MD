# 🔤 `letterCombinations` (Phone Number Letter Combinations)

This JavaScript algorithm generates all possible letter combinations that a given digit string could represent, based on the classic telephone keypad mapping (digits 2–9).

---

## 🧠 Objective

Given a string of digits from `'2'` to `'9'`, return all possible letter combinations the number could represent.

Each digit maps to specific letters as shown on a telephone button layout.

---

### 🔢 Digit to Letter Mapping:

| Digit | Letters |
| ----- | ------- |
| 2     | abc     |
| 3     | def     |
| 4     | ghi     |
| 5     | jkl     |
| 6     | mno     |
| 7     | pqrs    |
| 8     | tuv     |
| 9     | wxyz    |

---

## 🛠️ How the algorithm works

```txt
1. Create a map object to relate each digit to its corresponding letters.
2. Use a recursive function (backtrack) to build combinations:
   - At each digit, loop through its possible letters
   - Add one letter at a time to the current path
   - When the path length equals digits.length, save the path in the result
3. Return the result array
```

## 📥 Input Example

const digits = "23";

## 📤 Expected Output

["ad","ae","af","bd","be","bf","cd","ce","cf"]

## 🔁 Example Breakdown

For digits `"23"`:

- `"2"` → `"a", "b", "c"`
- `"3"` → `"d", "e", "f"`

### 🧩 Combinations:

```txt
"ad", "ae", "af",
"bd", "be", "bf",
"cd", "ce", "cf"
```

## 📊 Time and Space Complexity

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(4ⁿ)      |
| Space | O(4ⁿ)      |

- `n = digits.length`
- Each digit can represent up to 4 letters (like `'7'` or `'9'`)
- Total combinations are up to **4ⁿ** in the worst case
- Each valid combination is stored in the `result` array

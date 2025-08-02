# 🔢 `intToRoman` (Integer to Roman Numeral)

This JavaScript algorithm converts a given integer into its Roman numeral representation by using fixed Roman rules and subtractive notation patterns.

---

## 🧠 Objective

Given an integer between `1` and `3999`, the goal is to convert it into a valid **Roman numeral**.

### Roman Symbols:

| Symbol | Value |
| ------ | ----- |
| M      | 1000  |
| CM     | 900   |
| D      | 500   |
| CD     | 400   |
| C      | 100   |
| XC     | 90    |
| L      | 50    |
| XL     | 40    |
| X      | 10    |
| IX     | 9     |
| V      | 5     |
| IV     | 4     |
| I      | 1     |

---

## 🛠️ How the algorithm works

```txt
1. Start with a list of Roman numeral symbols and their values, in descending order.
2. Initialize an empty result string.
3. Loop through the list:
   - While the current number is greater than or equal to the value:
     a. Append the symbol to the result
     b. Subtract the value from the number
4. Return the constructed Roman numeral string
```

## 📥 Input Example

const num = 3749;

##📤 Expected Output

"MMMDCCXLIX"

## 🔁 Example Breakdow

3749 =
3000 → MMM
700 → DCC
40 → XL
9 → IX
Result: "MMMDCCXLIX"

## 📊 Time and Space Complexity

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(1)       |
| Space | O(1)       |

The number of operations is bounded and constant due to the maximum input (`3999`) and the fixed mapping of Roman numerals.

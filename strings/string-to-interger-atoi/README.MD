# 🧮 `myAtoi` (String to Integer)

This JavaScript algorithm manually implements the `myAtoi` function, which converts a string into a signed 32-bit integer, following specific parsing rules similar to the `atoi` function in C/C++.

---

## 🧠 Objective

Given a string `s`, the goal is to extract a valid integer by following these steps:

- Ignore leading whitespaces
- Consider the optional `'+'` or `'-'` sign
- Parse numeric digits and stop at the first invalid character
- Clamp the result to the **32-bit signed integer range**:  
  \[-2³¹, 2³¹ − 1\] → \[-2147483648, 2147483647\]

---

## 🛠️ How the algorithm works

```txt
1. Skip any leading whitespaces
2. Check for optional '+' or '-' sign
3. Read characters one by one:
   - If the character is a digit ('0' to '9'), convert it to a number
   - If it's not a digit, stop reading
4. Build the integer by multiplying the current number by 10 and adding the new digit
5. Apply the detected sign to the result
6. Clamp the final value to fit within the range:
   - If less than -2^31, return -2^31
   - If greater than 2^31 - 1, return 2^31 - 1

##📥 Input Example
const s = "   -042";

## 📤 Expected Output
-42

## 📊 Time and Space Complexity

Time	O(n)
Space	O(1)

The algorithm scans the string once using a linear pass and uses only constant memory.
```

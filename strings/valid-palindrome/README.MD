# 🔁 `isPalindrome` (Valid Palindrome)

This JavaScript algorithm checks whether a string is a **valid palindrome** after:

1. Converting all uppercase letters to lowercase
2. Removing all non-alphanumeric characters (`a–z`, `A–Z`, `0–9` only)

---

## 🧠 Objective

Given a string `s`, return:

- `true` if, after normalization, it reads the same forwards and backwards
- `false` otherwise

---

## ✅ Rules for Normalization

- **Alphanumeric check**:

  - Digits: `'0' <= c <= '9'`
  - Uppercase: `'A' <= c <= 'Z'`
  - Lowercase: `'a' <= c <= 'z'`

- **Lowercase conversion (manual)**:
  - If `'A' <= c <= 'Z'` → convert by `charCodeAt + 32` → `String.fromCharCode`
  - Else keep as is (already lowercase or digit)

---

## 🛠️ How the Algorithm Works

```txt
1. Initialize two pointers:
   - i = 0 (start of string)
   - j = s.length - 1 (end of string)

2. While i < j:
   a. Move i forward until it points to an alphanumeric character
   b. Move j backward until it points to an alphanumeric character
   c. If pointers cross, stop (it's a palindrome)
   d. Convert both characters to lowercase (manual conversion)
   e. Compare:
      - If different → return false
      - Else move i++ and j--

3. Return true if all pairs match
```

## 📥 Input Example

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)); // true

## 📤 Expected Output

true

## 🔎 Step-by-Step Example

### Input: `"A man, a plan, a canal: Panama"`

```txt
Normalized: "amanaplanacanalpanama"
Comparisons: all pairs match → palindrome
```

### Input: "race a car"

Normalized: "raceacar"
Comparison fails at 'e' vs 'a' → not palindrome

## 📊 Time and Space Complexity

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n)       |
| Space | O(1)       |

- **Time:** Each pointer moves at most `n` steps
- **Space:** Only constant extra variables are used

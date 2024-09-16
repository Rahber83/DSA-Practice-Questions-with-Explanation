# Explanation of `solutionFirstOfPatternEight` Function

The `solutionFirstOfPatternEight` function prints an inverted pyramid pattern of asterisks (`*`). The number of rows is determined by the parameter `n`, and the pyramid decreases in size from top to bottom, creating a symmetrical pattern.

## **Function Overview:**

The function constructs an inverted pyramid using a combination of spaces and asterisks. The number of spaces increases with each row, while the number of asterisks decreases, forming the inverted pyramid shape.

## **Code Description:**

1. **Outer Loop:**

   - `for (let i = n; i > 0; i--)`:  
     This loop runs from `n` down to `1`. The variable `i` represents the current row number, starting from `n` (top of the pyramid) down to `1` (bottom).

2. **First String (Leading Spaces):**

   - `for (let j = 1; j <= n - i; j++)`:  
     This loop generates the leading spaces before the asterisks. The number of spaces is determined by `n - i`, meaning that with each row, the number of leading spaces increases as `i` decreases.

3. **Second String (Asterisks):**

   - `for (let j = 1; j <= 2 * i - 1; j++)`:  
     This loop prints the asterisks for the current row. The number of asterisks is determined by `2 * i - 1`, which ensures that the number of asterisks decreases as the row number decreases.

4. **Third String (Trailing Spaces):**

   - `for (let j = 1; j <= n - i; j++)`:  
     This loop adds trailing spaces after the asterisks to ensure symmetry. The number of trailing spaces is the same as the leading spaces (`n - i`).

5. **New Line:**
   - `console.log();`:  
     After each row is printed, this command moves to the next line, preparing for the next row.

```
*********
 *******
  *****
   ***
    *
```

### **Time Complexity:**

## The time complexity of this function is **O(n²)**.

>

# Explanation of `solutionSecondOfPatternEight` Function

The `solutionSecondOfPatternEight` function prints an inverted pyramid pattern of asterisks (`*`). The number of rows is determined by the parameter `n`, and the pyramid decreases in size from top to bottom, creating a symmetrical inverted pyramid.

## **Function Overview:**

The function uses string manipulation to create an inverted pyramid. The number of spaces increases with each row, while the number of asterisks decreases. This results in a pattern where the asterisks form an inverted triangle, centered with leading and trailing spaces.

## **Code Description:**

1. **Outer Loop:**

   - `for (let i = n; i > 0; i--)`:  
     This loop runs from `n` down to `1`. The variable `i` represents the current row number, starting at `n` (the top of the pyramid) and ending at `1` (the smallest base).

2. **Leading Spaces:**

   - `let spaces = " ".repeat(n - i);`:  
     This creates a string of leading spaces. The number of spaces for each row is `n - i`, meaning that as `i` decreases, the number of spaces increases, making the pyramid symmetrical.

3. **Asterisks:**

   - `let stars = "*".repeat(2 * i - 1);`:  
     This creates the string of asterisks for the current row. The number of asterisks is determined by `2 * i - 1`, which decreases as `i` decreases, forming the inverted pyramid shape.

4. **Concatenation and Printing:**
   - `console.log(spaces + stars + spaces);`:  
     The spaces and asterisks are concatenated into a single string, which is printed to the console. The same number of spaces is added before and after the asterisks to maintain the symmetrical shape of the pyramid.

```
*********
 *******
  *****
   ***
    *
```

### **Time Complexity:**

The time complexity of this function is **O(n²)**.

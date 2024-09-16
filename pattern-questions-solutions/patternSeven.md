# Explanation of `solutionFirstOfPatternSeven` Function

The `solutionFirstOfPatternSeven` function prints a centered pyramid pattern of asterisks (`*`). The height of the pyramid is determined by the parameter `n`.

## **Function Overview:**

The function prints a pyramid with `n` rows, where each row has an increasing number of asterisks centered by spaces.

## **Code Description:**

1. **Outer Loop:**

   - `for (let i = 1; i <= n; i++)`:  
     The outer loop runs `n` times. Each iteration represents a row in the pyramid. As `i` increases, the number of asterisks and spaces for each row adjusts accordingly.

2. **First Inner Loop (Leading Spaces):**

   - `for (let j = 1; j <= n - i; j++)`:  
     This loop prints the leading spaces to center the asterisks. The number of spaces decreases as the row number increases. On the first row, `n-1` spaces are printed; on the second row, `n-2`, and so on.

3. **Second Inner Loop (Asterisks):**

   - `for (let j = 1; j <= 2 * i - 1; j++)`:  
     This loop prints the asterisks for each row. The number of asterisks is calculated using `2 * i - 1`, which ensures an odd number of asterisks in each row, forming the pyramid shape. The first row prints `1` asterisk, the second row prints `3`, and so on.

4. **Third Inner Loop (Trailing Spaces):**

   - `for (let j = 1; j <= n - i; j++)`:  
     This loop prints the trailing spaces after the asterisks, balancing the leading spaces for each row. These spaces are similar to the leading spaces and decrease as the row number increases.

5. **New Line After Each Row:**
   - `console.log();`  
     After printing the spaces and asterisks for a row, this ensures the next iteration starts on a new line.

```
    *
   ***
  *****
 *******
*********
```

## **Time Complexity:**

The time complexity of this function is **O(n²)**.

>

# Explanation of `solutionSecondOfPatternSeven` Function

The `solutionSecondOfPatternSeven` function prints a centered pyramid pattern of asterisks (`*`). The pyramid has `n` rows, and the number of asterisks increases with each row, forming a symmetrical pyramid.

## **Function Overview:**

The function constructs a pyramid using spaces and asterisks. The number of spaces on either side of the asterisks decreases as you move to lower rows, while the number of asterisks increases.

## **Code Description:**

1. **Outer Loop:**

   - `for (let i = 1; i <= n; i++)`:  
     This loop runs `n` times, where each iteration represents a row in the pyramid. The variable `i` determines the row number (from `1` to `n`).

2. **First String (`spaces`):**

   - `let spaces = " ".repeat(n - i);`:  
     This creates a string of leading spaces to center the asterisks for each row. The `repeat()` function generates `n - i` spaces, which decreases as the row number increases, allowing the pyramid to be centered.

3. **Second String (`stars`):**

   - `let stars = "*".repeat(2 * i - 1);`:  
     This creates a string of asterisks for each row. The number of asterisks is determined by `2 * i - 1`, ensuring an odd number of asterisks, starting with `1` in the first row, `3` in the second row, and so on.

4. **Combining Strings:**
   - `console.log(spaces + stars + spaces);`:  
     This line combines the leading spaces, asterisks, and trailing spaces and prints them on a new line. The same number of spaces on both sides ensures the pyramid is centered.

```
    *
   ***
  *****
 *******
*********
```

## **Time Complexity:**

The time complexity of this function is **O(n²)**.

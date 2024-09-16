# Explanation of `solutionFirstOfPatternTwo` Function

The `solutionFirstOfPatternTwo` function generates a right-angled triangle pattern of asterisks (`*`). The number of rows in the triangle is determined by the parameter `n`.

The function works as follows:

1. **Function Declaration:** `const solutionFirstOfPatternTwo = (n) => { ... }` defines the function, where `n` specifies the number of rows.

2. **Outer Loop:** The `for` loop `for (let i = 0; i < n; i++)` iterates from `0` to `n-1`, with `i` representing the current row index.

3. **Inner Loop:** Inside the outer loop, another `for` loop `for (let j = 0; j <= i; j++)` iterates from `0` to `i`, printing asterisks on the current row.

4. **Print Asterisk:** `process.stdout.write("*");` prints an asterisk without moving to a new line, so multiple asterisks appear on the same line.

5. **New Line:** After printing the asterisks for a row, `console.log();` moves the cursor to the next line.

6 **Function Call:** Calling `solutionFirstOfPatternTwo(5);` will print a right-angled triangle of asterisks with 5 rows.

# Explanation of `solutionSecondOfPatternTwo` Function

The `solutionSecondOfPatternTwo` function generates a right-angled triangle pattern of asterisks (`*`). The number of rows in the triangle is determined by the parameter `n`.

The function works as follows:

1. **Function Declaration:** `const solutionSecondOfPatternTwo = (n) => { ... }` defines the function, where `n` specifies the number of rows.
2. **Loop Through Rows:** The `for` loop `for (let i = 1; i <= n; i++)` iterates from `1` to `n`, with `i` representing the current row index.
3. **Print Asterisks:** Inside the loop, `console.log("*".repeat(i));` prints a line with `i` asterisks. The `repeat(i)` method creates a string with `i` asterisks, and `console.log()` outputs it.
4. **Function Call:** Calling `solutionSecondOfPatternTwo(5);` will print a right-angled triangle of asterisks with 5 rows.

# Explanation of `solutionFirstOfPatternFour` Function

The `solutionFirstOfPatternFour` function prints a right-angled triangle pattern of repeated numbers. It takes a single parameter `n`, which specifies the number of rows in the pattern.

1. **Function Definition:** The function is defined to accept one argument, `n`, which determines the number of rows in the pattern.

2. **Outer Loop:** The outer loop `for (let i = 1; i <= n; i++)` runs `n` times. Each iteration of this loop represents one row of the pattern.

3. **Inner Loop:** Inside the outer loop, there is another loop `for (let j = 1; j <= i; j++)` that runs up to the current row number `i`. This inner loop is responsible for printing the number `i` repeatedly in each row.

4. **Printing Numbers:** Within the inner loop, the current row number `i` is converted to a string using `i.toString()` and printed without moving to a new line. This is achieved using `process.stdout.write(i.toString())`. This method allows the number `i` to be printed consecutively on the same line.

5. **New Line After Each Row:** After the inner loop completes (i.e., after printing all occurrences of the number for the current row), `console.log()` is used to move to the next line. This ensures that the next row of repeated numbers starts on a new line.

6. **Function Call:** The function is executed with `n = 5`, resulting in a pattern of repeated numbers like this:

   ```
   1
   22
   333
   4444
   55555
   ```

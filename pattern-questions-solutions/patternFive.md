# Explanation of `solutionFirstOfPatternFive` Function

The `solutionFirstOfPatternFive` function prints an inverted right-angled triangle pattern of asterisks (`*`). It takes a single parameter `n`, which specifies the number of rows in the pattern.

1. **Function Definition:** The function is defined to accept one argument, `n`, which determines the number of rows in the inverted triangle.

2. **Outer Loop:** The outer loop `for (let i = n; i > 0; i--)` runs `n` times, decrementing `i` with each iteration. Each iteration of this loop represents one row, and the number of asterisks in each row decreases as `i` decreases.

3. **Inner Loop:** Inside the outer loop, there is another loop `for (let j = 1; j <= i; j++)` that runs up to the current value of `i`. This inner loop is responsible for printing the asterisks for each row. The number of asterisks printed in each row corresponds to the current value of `i`.

4. **Printing Asterisks:** Within the inner loop, an asterisk (`*`) is printed using `process.stdout.write("*")` without moving to a new line. This method allows the asterisks to be printed consecutively on the same line.

5. **New Line After Each Row:** After the inner loop completes (i.e., after printing all asterisks for the current row), `console.log()` is used to move to the next line. This ensures that the next row of asterisks starts on a new line.

6. **Function Call:** The function is executed with `n = 5`, resulting in the following inverted right-angled triangle pattern:

   ```
   *****
   ****
   ***
   **
   *
   ```

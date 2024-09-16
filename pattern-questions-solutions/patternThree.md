# Explanation of `solutionFirstOfPatternThree` Function

The `solutionFirstOfPatternThree` function prints a right-angled triangle pattern of numbers. It takes a single parameter `n`, which specifies the number of rows in the pattern.

1. **Function Definition:** The function is defined to accept one argument, `n`, which determines the number of rows in the pattern.

2. **Outer Loop:** The outer loop `for (let i = 1; i <= n; i++)` runs `n` times. Each iteration of this loop represents one row of the pattern.

3. **Inner Loop:** Inside the outer loop, there is another loop `for (let j = 1; j <= i; j++)` that runs up to the current row number `i`. This inner loop is responsible for printing the numbers in each row.

4. **Printing Numbers:** Within the inner loop, the current number `j` is converted to a string using `j.toString()` and printed without moving to a new line. This is achieved using `process.stdout.write(j.toString())`. This method allows the numbers to be printed consecutively on the same line.

5. **New Line After Each Row:** After the inner loop completes (i.e., after printing all numbers for the current row), `console.log()` is used to move to the next line. This ensures that the next row of numbers starts on a new line.

6. **Function Call:** The function is executed with `n = 5`, resulting in a pattern of numbers like this:

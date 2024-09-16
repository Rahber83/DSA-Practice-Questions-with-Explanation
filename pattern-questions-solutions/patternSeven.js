/**
 Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

    *
   ***
  *****
 *******
*********

 */

// Solution First:
const solutionFirstOfPatternSeven = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
};

solutionFirstOfPatternSeven(5);

// Solution Second:
const solutionSecondOfPatternSeven = (n) => {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
};
solutionSecondOfPatternSeven(6);

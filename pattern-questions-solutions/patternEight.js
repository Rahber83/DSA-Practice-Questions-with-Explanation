/**
 Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
 
*********
 *******
  *****
   ***
    *
 */

// Solution First:
const solutionFirstOfPatternEight = (n) => {
  for (let i = n; i > 0; i--) {
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

solutionFirstOfPatternEight(5);

// Solution Second:
const solutionSecondOfPatternEight = (n) => {
  for (let i = n; i > 0; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
};

solutionSecondOfPatternEight(5);

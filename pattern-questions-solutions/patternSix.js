/**
 Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

12345
1234
123
12
1
 */

// Solution First:
const solutionFirstOfPatternSix = (n) => {
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
};

solutionFirstOfPatternSix(5);

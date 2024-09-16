/**
 Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*****
****
***
**
*

*/

// Solution First:
const solutionFirstOfPatternFive = (n) => {
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

solutionFirstOfPatternFive(5);

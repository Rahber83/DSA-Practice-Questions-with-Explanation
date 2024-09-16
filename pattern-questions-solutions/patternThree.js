/**
 Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

1
12
123
1234
12345

*/

//Solution First:-
const solutionFirstOfPatternThree = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
};

solutionFirstOfPatternThree(5);

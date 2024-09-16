/** Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*
**
***
****
*****

*/

//Solution One:-
const solutionFirstOfPatternTwo = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

solutionFirstOfPatternTwo(5);

//Solution Second:-
const solutionSecondOfPatternTwo = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
};

solutionSecondOfPatternTwo(5);

/**Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*****
*****
*****
*****
***** 

*/

//Solution One:-
const solutionFirstOfPatternOne = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

solutionFirstOfPatternOne(5);

//Solution Second:-
const solutionSecondOfPatternOne = (n) => {
  let row = "*".repeat(n);
  for (let i = 0; i < n; i++) {
    console.log(row);
  }
};
solutionSecondOfPatternOne(6);

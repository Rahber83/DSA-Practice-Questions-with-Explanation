let missingNumberBrute = [1, 2, 3, 0, 4];

//Problem:-Find missing number - Brtue Force Approach

const findMissingNumberBruteForce = (nums) => {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      console.log(i);
    }
  }
};

findMissingNumberBruteForce(missingNumberBrute);

//Problem:-Find missing number - Optimal Approach
let missingNumberOptimal = [0, 2, 5, 4, 1];
const findMissingNumberOptimal = (nums) => {
  let n = nums.length;

  let totalSum = (n * (n + 1)) / 2;

  let actualSum = nums.reduce((sum, num) => sum + num, 0);

  console.log(totalSum - actualSum);
};

findMissingNumberOptimal(missingNumberOptimal);

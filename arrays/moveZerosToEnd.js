// Problem:- Move Zeros to End Brute Force Approach

let arrayWithZeroBrute = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

const moveZerosToTheEndBrute = (nums) => {
  let n = nums.length;

  let temp = new Array(n).fill(0);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      temp[count++] = nums[i];
    }
  }

  for (let i = 0; i < count; i++) {
    nums[i] = temp[i];
  }

  for (let i = count; i < n; i++) {
    nums[i] = 0;
  }

  console.log("array ---> ", nums);
};

moveZerosToTheEndBrute(arrayWithZeroBrute);

// Problem:- Move Zeros to End Optimal Approach
let arrayWithZeroOptimal = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

const moveZerosToTheEndOptimal = (nums) => {
  let n = nums.length;
  let j = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) {
    console.log(nums);
    return nums;
  }

  for (let i = j + 1; i < n; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  console.log("Optimal Array ---> ", nums);
};

moveZerosToTheEndOptimal(arrayWithZeroOptimal);

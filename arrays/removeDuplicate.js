let remove = [0, 0, 3, 3, 5, 6];

//1. Problem: Remove Duplicates from Sorted Array – Brute Force Approach
const removeDuplicate = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let duplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (nums[i] === result[j]) {
        duplicate = true;
        break;
      }
    }

    if (!duplicate) {
      result.push(nums[i]);
    }
  }

  console.log("result ---> ", result);
};

removeDuplicate(remove);

let removeOptimal = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6];

const removeDuplicateOptimalSolutions = (nums) => {
  if (nums.length === 0) return nums;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  console.log("nums ---> ", nums.slice(0, i + 1));
};

removeDuplicateOptimalSolutions(removeOptimal);

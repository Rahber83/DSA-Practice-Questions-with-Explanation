// Method 1:

let nums = [8, 8, 7, 6, 5];

const secondLargestElement = (nums) => {
  let sortedArray = nums.sort((a, b) => a - b);

  let largest = sortedArray[sortedArray.length - 1];
  let secondLargest = -Infinity;

  for (let i = sortedArray.length - 2; i >= 0; i--) {
    if (sortedArray[i] != largest) {
      secondLargest = sortedArray[i];
      break;
    }
  }
  console.log(secondLargest);
};

secondLargestElement(nums);

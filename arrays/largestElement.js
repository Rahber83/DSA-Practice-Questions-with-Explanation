// Method 1: Find the Largest Element from the Array.
let nums = [-4, -3, 0, 1, 8];

const largestElement = (nums) => {
  let biggest = nums[0];
  console.log(biggest);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > biggest) {
      biggest = nums[i];
    }
  }
  console.log(biggest);
};

largestElement(nums);

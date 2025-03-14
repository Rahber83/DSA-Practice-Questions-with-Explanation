let arrayRotate = [1, 2, 3, 4, 5];
let k = 2;

// To Rotate a Array left by one (Easy Problem)
const rotateArrayLeftByOne = (nums) => {
  let temp = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums[nums.length - 1] = temp;
  console.log(nums);
};

rotateArrayLeftByOne(arrayRotate);

// To Rotate a Array for K Index(medium Problem)
const rotateArrayLeftByKTimes = (nums, k) => {
  let limit = 0;
  while (limit <= k) {
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
      nums[i - 1] = nums[i];
    }
    nums[nums.length - 1] = temp;
    limit++;
    console.log("nums ---> ", nums);
  }
};

rotateArrayLeftByKTimes(arrayRotate, k);

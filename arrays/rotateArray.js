let arrayRotate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayRotateoptimal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;

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

// To Rotate a Array for K Index(medium Problem) - Brute Force Approach
const rotateArrayLeftByKTimes = (nums, k) => {
  let limit = 0;
  while (limit < k) {
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
      nums[i - 1] = nums[i];
    }
    nums[nums.length - 1] = temp;
    limit++;
    console.log("nums brute---> ", nums);
  }
};

rotateArrayLeftByKTimes(arrayRotate, k);

// To Rotate a Array for K Index(medium Problem) - Optimal Approach
const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rotateArrayLeftByKTimesOptimal = (nums, k) => {
  let n = nums.length;
  k = k % n;

  // Step 1: Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Step 2: Reverse the remaining n - k elements
  reverse(nums, k, n - 1);

  // Step 3: Reverse the entire array
  reverse(nums, 0, n - 1);

  console.log("nums optimal ---> ", nums);
};

rotateArrayLeftByKTimesOptimal(arrayRotateoptimal, k);

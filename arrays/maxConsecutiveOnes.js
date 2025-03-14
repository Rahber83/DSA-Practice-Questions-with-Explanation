let number = [1, 1, 0, 0, 1, 1, 1, 0];

const maximumConsecutiveOnes = (nums) => {
  let maximum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      maximum = Math.max(maximum, count);
    } else {
      count = 0;
    }
  }
  console.log(maximum);
};

maximumConsecutiveOnes(number);

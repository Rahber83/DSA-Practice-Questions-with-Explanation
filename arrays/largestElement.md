# Explanation of `largestelement` Function

## Problem: `Find the Largest Element` –

### Explanation using a For loop -->

1. **`let nums = [-4, -3, 0, 1, 8];`**

   - This line declares an array named `nums` containing five numerical elements: `-4`, `-3`, `0`, `1`, and `8`.

2. **`const largestElement = (nums) => {`**

   - This line defines an arrow function called `largestElement` that accepts one parameter, `nums`, which represents the input array.

3. **`let biggest = nums[0];`**

   - This initializes a variable named `biggest` with the first element of the array (`-4`).
   - It assumes that the first element is the largest until a larger element is found.

4. **`console.log(biggest);`**

   - This line logs the initial value of `biggest` (which is `-4`) to the console, showing the starting point of the comparison.

5. **`for (let i = 0; i < nums.length; i++) {`**

   - This for loop iterates through every element in the array.
   - It starts at index `0` and continues until `i` is less than the length of the array.

6. **`if (nums[i] > biggest) {`**

   - Inside the loop, this if statement checks if the current element `nums[i]` is greater than the current value of `biggest`.

7. **`biggest = nums[i];`**

   - If the condition is true, this line updates `biggest` to the current element (`nums[i]`), thereby keeping track of the largest number found so far.

8. **`console.log(biggest);`**

   - After the loop finishes, this line logs the final value of `biggest` to the console.
   - This final value represents the largest element in the array.

9. **`largestElement(nums);`**
   - Finally, the function `largestElement` is called with the array `nums` as its argument, executing the logic to find and print the largest element.

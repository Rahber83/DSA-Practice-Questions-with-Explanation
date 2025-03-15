# Explanation of the `arrayRotate.js` File

### Explanation of Rotating an Array Left by One (Easy Problem) -->

1. **`let arrayRotate = [1, 2, 3, 4, 5];`**

   - Declares an array named `arrayRotate` containing the elements `[1, 2, 3, 4, 5]` that will be manipulated.

2. **`let k = 2;`**

   - Sets a variable `k` with the value `2`, representing the number of rotations for the medium problem.

3. **`const rotateArrayLeftByOne = (nums) => {`**

   - Defines an arrow function `rotateArrayLeftByOne` that accepts one parameter, `nums` (an array to be rotated).

4. **`let temp = nums[0];`**

   - Stores the first element of the array (`nums[0]`) in a temporary variable `temp` for later use.

5. **`for (let i = 1; i < nums.length; i++) {`**

   - Starts a for loop that iterates from index `1` to the end of the array.
   - The purpose is to shift each element one position to the left.

6. **`nums[i - 1] = nums[i];`**

   - Within the loop, assigns the value at index `i` to the position `i - 1`, effectively moving every element one step to the left.

7. **`nums[nums.length - 1] = temp;`**

   - After the loop, places the initially stored first element (`temp`) at the last index of the array.
   - This completes one left rotation.

8. **`console.log(nums);`**

   - Logs the updated array to the console to show the result after one left rotation.

9. **`rotateArrayLeftByOne(arrayRotate);`**
   - Calls the `rotateArrayLeftByOne` function with the `arrayRotate` array as the argument to perform a single left rotation.

---

### Explanation of Rotating an Array Left by K Times `Brute Force Approach` (Medium Problem) -->

1. **`const rotateArrayLeftByKTimes = (nums, k) => {`**

   - Defines an arrow function `rotateArrayLeftByKTimes` that accepts two parameters: `nums` (the array to rotate) and `k` (the number of left rotations to perform).

2. **`let limit = 0;`**

   - Initializes a variable `limit` to `0` to count the number of rotations performed.

3. **`while (limit <= k) {`**

   - Uses a `while` loop to perform the left rotation repeatedly.
   - The loop continues until `limit` is greater than `k` (note: this condition causes the loop to execute `k + 1` times, which might be an off-by-one error if only `k` rotations are intended).

4. **Inside the `while` loop:**

   - **`let temp = nums[0];`**

     - Saves the first element of the current array in the variable `temp`.

   - **For Loop: `for (let i = 1; i < nums.length; i++) {`**

     - Iterates through the array from the second element to the last.

   - **`nums[i - 1] = nums[i];`**

     - Shifts each element one position to the left by assigning the current element to the previous index.

   - **`nums[nums.length - 1] = temp;`**

     - Places the initially saved first element (`temp`) at the end of the array, completing one left rotation.

   - **`limit++;`**

     - Increments the `limit` counter to keep track of the number of rotations performed.

   - **`console.log("nums ---> ", nums);`**
     - Logs the state of the array after each rotation, showing the progressive changes.

5. **`rotateArrayLeftByKTimes(arrayRotate, k);`**
   - Calls the `rotateArrayLeftByKTimes` function with the `arrayRotate` array and the value `k` as arguments, initiating the process to rotate the array left by `k` (or possibly `k+1`) times.

---

### Explanation of Rotating an Array Left by K Times `Optimal Approach` (Medium Problem) -->

1. **Helper Function: `reverse`**

   - **Purpose:**  
     The `reverse` function is used to reverse a portion of an array in-place between the indices `start` and `end`.
   - **How it Works:**
     - It uses a `while` loop that runs as long as `start < end`.
     - Within the loop, it swaps the elements at positions `start` and `end`.
     - After each swap, it increments `start` and decrements `end` until the entire segment is reversed.

2. **Main Function: `rotateArrayLeftByKTimesOptimal`**

   - **Parameters:**
     - `nums`: The array to be rotated.
     - `k`: The number of positions by which the array should be rotated to the left.
   - **Step-by-Step Process:**

   1. **Calculate Effective Rotations:**

      - `let n = nums.length;` stores the length of the array.
      - `k = k % n;` ensures that if `k` is greater than the length of the array, only the necessary rotations are performed (i.e., it converts `k` to an effective rotation value).

   2. **Step 1: Reverse the First k Elements**

      - `reverse(nums, 0, k - 1);`
      - This reverses the subarray from index `0` to `k-1`.
      - For example, if the array is `[1, 2, 3, 4, 5, 6, 7, 8, 9]` and `k = 3`, the first 3 elements `[1, 2, 3]` become `[3, 2, 1]`.

   3. **Step 2: Reverse the Remaining n - k Elements**

      - `reverse(nums, k, n - 1);`
      - This reverses the subarray from index `k` to the end of the array.
      - Continuing the example, reversing the elements from index `3` to `8` changes `[4, 5, 6, 7, 8, 9]` into `[9, 8, 7, 6, 5, 4]`.

   4. **Step 3: Reverse the Entire Array**
      - `reverse(nums, 0, n - 1);`
      - Finally, reversing the whole array transforms it into the left-rotated array by `k` positions.
      - In our example, reversing `[3, 2, 1, 9, 8, 7, 6, 5, 4]` results in `[4, 5, 6, 7, 8, 9, 1, 2, 3]`.

3. **Logging the Result:**

   - `console.log("nums optimal ---> ", nums);` prints the rotated array to the console.

4. **Function Invocation:**
   - `rotateArrayLeftByKTimesOptimal(arrayRotateoptimal, k);`
   - This line calls the function with the array (`arrayRotateoptimal`) and the number of rotations (`k`) as arguments.

---

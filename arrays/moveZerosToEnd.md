## Problem: `Move Zeros to End` – Brute Force Approach

### Explanation using the Brute Force Approach -->

1. **Initialize the Input Array:**

   - `let arrayWithZeroBrute = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];`
   - This array contains a mix of non-zero numbers and zeros. The goal is to move all zeros to the end while keeping the order of non-zero elements unchanged.

2. **Define the Function:**

   - `const moveZerosToTheEndBrute = (nums) => { ... }`
   - The function `moveZerosToTheEndBrute` takes an array `nums` as input.

3. **Create a Temporary Array Filled with Zeros:**

   - `let n = nums.length;`  
     Retrieves the length of the input array.
   - `let temp = new Array(n).fill(0);`  
     Creates a new array `temp` of the same length, initially filled with zeros.
   - `let count = 0;`  
     Initializes a counter `count` to track the position in `temp` where the next non-zero element should be placed.

4. **Extract Non-Zero Elements:**

   - The first `for` loop iterates over the original array:
     ```javascript
     for (let i = 0; i < n; i++) {
       if (nums[i] !== 0) {
         temp[count++] = nums[i];
       }
     }
     ```
   - **Logic:**
     - For each element, if it is not zero, it is copied into the `temp` array at the current `count` index.
     - `count` is then incremented so that non-zero elements are placed in order.

5. **Copy Non-Zero Elements Back into the Original Array:**

   - The second `for` loop copies the non-zero elements from `temp` back into `nums`:
     ```javascript
     for (let i = 0; i < count; i++) {
       nums[i] = temp[i];
     }
     ```

6. **Fill the Remaining Positions with Zeros:**

   - The third `for` loop sets the remaining indices of `nums` (from `count` to `n - 1`) to zero:
     ```javascript
     for (let i = count; i < n; i++) {
       nums[i] = 0;
     }
     ```

7. **Output the Result:**

   - `console.log("array ---> ", nums);` prints the modified array where all zeros are moved to the end.

8. **Function Invocation:**
   - `moveZerosToTheEndBrute(arrayWithZeroBrute);`
   - Calls the function with the sample input array to execute the brute force approach.

---

## Problem: `Move Zeros to End` – Optimal Approach

### Explanation using the Optimal Approach -->

1. **Initialize the Input Array:**

   - `let arrayWithZeroOptimal = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];`
   - This array contains non-zero values and zeros. The task remains to shift all zeros to the end while preserving the order of non-zero elements.

2. **Define the Function:**

   - `const moveZerosToTheEndOptimal = (nums) => { ... }`
   - The function `moveZerosToTheEndOptimal` takes the array `nums` as input.

3. **Find the First Zero in the Array:**

   - `let n = nums.length;` stores the length of the array.
   - `let j = -1;` initializes a pointer `j` that will indicate the position of the first zero encountered.
   - The first `for` loop searches for the first zero:
     ```javascript
     for (let i = 0; i < n; i++) {
       if (nums[i] === 0) {
         j = i;
         break;
       }
     }
     ```
   - **Logic:**
     - As soon as the first zero is found, `j` is set to its index, and the loop is terminated.
     - If no zero is found (`j` remains `-1`), the array is already in the desired state.

4. **Handle Edge Case (No Zeros Found):**

   - ```javascript
     if (j === -1) {
       console.log(nums);
       return nums;
     }
     ```
   - If the array contains no zeros, the function outputs the original array and exits early.

5. **Shift Non-Zero Elements to the Left:**

   - The second `for` loop iterates from the element right after the first zero (`j + 1`) until the end of the array:
     ```javascript
     for (let i = j + 1; i < n; i++) {
       if (nums[i] !== 0) {
         [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap the non-zero with the zero at index j
         j++; // Move pointer j to the next zero position
       }
     }
     ```
   - **Logic:**
     - When a non-zero element is encountered, it is swapped with the element at index `j` (which holds a zero).
     - After the swap, `j` is incremented to point to the next zero, ensuring non-zero elements continue to shift left.

6. **Output the Result:**

   - `console.log("Optimal Array ---> ", nums);` prints the final array with all zeros moved to the end.

7. **Function Invocation:**
   - `moveZerosToTheEndOptimal(arrayWithZeroOptimal);`
   - Calls the function with the sample input array to execute the optimal approach.

---

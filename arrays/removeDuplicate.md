# 1. Explanation of `removeDuplicate.js` file

## Problem: `Remove Duplicates from Sorted Array` – Brute Force Approach

### Explanation using a Brute Force Approach -->

1. **Input Array:**

   - `let remove = [0, 0, 3, 3, 5, 6];`
   - This array contains duplicate elements. The goal is to remove duplicates and return an array with only unique elements.

2. **Define the Function:**

   - `const removeDuplicate = (nums) => { ... }`
   - The function `removeDuplicate` takes an array `nums` as its parameter.

3. **Initialize the Result Array:**

   - `let result = [];`
   - This creates an empty array `result` where unique elements will be stored.

4. **Iterate Over the Input Array:**
   - The outer loop `for (let i = 0; i < nums.length; i++) { ... }` iterates through each element in the input array.
5. **Check for Duplicates:**

   - **Initialize a Flag:**
     - `let duplicate = false;`
     - For each element `nums[i]`, a boolean flag `duplicate` is set to `false`. This flag will indicate whether the element is already present in the `result` array.
   - **Inner Loop:**
     - The inner loop `for (let j = 0; j < result.length; j++) { ... }` iterates through the `result` array.
     - **Comparison:**
       - The condition `if (nums[i] === result[j]) { ... }` checks if the current element from `nums` is equal to any element in `result`.
     - **Mark as Duplicate:**
       - If a match is found, `duplicate` is set to `true` and the loop is exited immediately using `break`.

6. **Add Unique Element:**

   - After the inner loop, the condition `if (!duplicate) { ... }` checks if the flag is still `false`.
   - **Push to Result:**
     - If the element is not a duplicate, it is added to the `result` array using `result.push(nums[i]);`.

7. **Output the Result:**

   - `console.log("result ---> ", result);` logs the final array containing only unique elements to the console.

8. **Function Invocation:**
   - `removeDuplicate(remove);` calls the function with the `remove` array to execute the duplicate removal process.

---

## Problem: `Remove Duplicates from Sorted Array` – Optimal Approach (The Two Pointer Method)

1. **Input Array Initialization:**

   - `let removeOptimal = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6];`
   - This sorted array contains duplicate numbers. The goal is to remove the duplicates while keeping only the unique elements.

2. **Function Definition:**

   - `const removeDuplicateOptimalSolutions = (nums) => { ... }`
   - The function processes the input array `nums` to remove duplicates using an optimal two pointer approach.

3. **Check for Empty Array:**

   - `if (nums.length === 0) return nums;`
   - This line handles the edge case where the input array is empty by immediately returning the empty array.

4. **Initialize the Slow Pointer:**

   - `let i = 0;`
   - The pointer `i` represents the index of the last unique element encountered. It starts at the first element of the array.

5. **Iterate with the Fast Pointer:**

   - `for (let j = 1; j < nums.length; j++) { ... }`
   - The fast pointer `j` starts from the second element (index 1) and iterates through the entire array.

6. **Compare Elements to Identify Duplicates:**

   - Inside the loop, the function compares `nums[j]` (the current element) with `nums[i]` (the last unique element found).
   - If the current element is different (`if (nums[j] !== nums[i])`), then:
     - **Increment `i`:**
       - Move the slow pointer forward to indicate the next position for a unique element.
     - **Update the Unique Element:**
       - `nums[i] = nums[j];`
         - Assign the new unique element to the position pointed by `i`.

7. **Extract the Unique Elements:**

   - After the loop completes, the first `i + 1` elements of the array contain the unique values.
   - `console.log("nums ---> ", nums.slice(0, i + 1));`
     - This prints the unique portion of the array, effectively removing all duplicates.

8. **Function Invocation:**
   - `removeDuplicateOptimalSolutions(removeOptimal);`
   - This call runs the function on the `removeOptimal` array, demonstrating the optimal duplicate removal.

### Outcome

After running the function, the output will be:

```
nums --->  [1, 2, 3, 4, 5, 6]
```

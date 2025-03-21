# Problem:- `Finding the Missing Number` – Brute Force Approach

### Explanation using a For Loop and Array Check -->

1. **Input Array:**

   - `let missingNumberBrute = [1, 2, 3, 0, 4];`
   - This array contains numbers within a certain range. The expected numbers are from `0` to `n` (where `n` is the length of the array), so for an array of length 5, the expected numbers are `0, 1, 2, 3, 4, 5`. One of these numbers is missing.

2. **Function Definition:**

   - `const findMissingNumberBruteForce = (nums) => { ... }`
   - The function `findMissingNumberBruteForce` takes an array `nums` as input and is designed to find the missing number using a brute force approach.

3. **Iterate Through the Expected Range:**

   - `for (let i = 0; i <= nums.length; i++) { ... }`
   - The loop iterates from `0` up to and including `nums.length`. This ensures that all numbers in the expected range (`0` to `n`) are checked.

4. **Check for the Missing Number:**

   - Inside the loop, the condition `if (!nums.includes(i)) { ... }` is used.
   - The `includes()` method checks if the current number `i` exists in the array.
   - If `nums` does not include `i`, then `i` is the missing number.

5. **Output the Missing Number:**
   - When a number is found that is not present in the array, it is printed to the console with `console.log(i);`.

## Summary

- **Brute Force Method:**  
  The solution checks every number in the expected range one by one using the `includes()` method to see if it is present in the array.
- **Time Complexity:**  
  This approach has a worst-case time complexity of O(n²) because, for each of the `n+1` possible numbers, it may scan through the entire array (of size `n`) to check for its presence.
- **Outcome:**  
  For the input array `[1, 2, 3, 0, 4]`, the expected numbers are `0, 1, 2, 3, 4, 5`. Since the array contains `0, 1, 2, 3, 4`, the missing number is `5`, which will be printed to the console.

---

# Problem:- `Finding the Missing Number` – Optimal Approach

### Explanation using Mathematical Summation (Optimal Approach) -->

1. **Input Array:**

   - `let missingNumberOptimal = [0, 2, 5, 4, 1];`
   - This array contains numbers in the range from `0` to `n` (with `n` being the length of the array). One number in this range is missing.

2. **Function Definition:**

   - `const findMissingNumberOptimal = (nums) => { ... }`
   - The function accepts an array `nums` as input and computes the missing number using an arithmetic approach.

3. **Determine the Length of the Array:**

   - `let n = nums.length;`
   - Here, `n` is set to the length of the array. For this example, `n` is `5`, meaning the expected numbers are from `0` to `5`.

4. **Calculate the Expected Sum:**

   - `let totalSum = (n * (n + 1)) / 2;`
   - This line computes the sum of all numbers from `0` to `n` using the formula:
     \[
     \text{totalSum} = \frac{n \times (n + 1)}{2}
     \]
   - For `n = 5`, the expected sum is:
     \[
     \frac{5 \times 6}{2} = 15
     \]

5. **Calculate the Actual Sum of the Array:**

   - `let actualSum = nums.reduce((sum, num) => sum + num, 0);`
   - The `reduce` method sums all the elements in the array. For the array `[0, 2, 5, 4, 1]`, the actual sum is:
     \[
     0 + 2 + 5 + 4 + 1 = 12
     \]

6. **Determine the Missing Number:**

   - The missing number is the difference between the expected sum and the actual sum:
     \[
     \text{Missing Number} = \text{totalSum} - \text{actualSum} = 15 - 12 = 3
     \]
   - The result is printed using:
     ```javascript
     console.log(totalSum - actualSum);
     ```

7. **Function Invocation:**
   - `findMissingNumberOptimal(missingNumberOptimal);`
   - This call executes the function with the provided array, outputting the missing number (`3`).

## Summary

- **Mathematical Insight:**  
  The solution leverages the arithmetic series sum formula to determine the expected total and subtracts the actual sum of the array elements.
- **Time Complexity:**  
  O(n), since the array is processed in a single pass to compute the sum.
- **Outcome:**  
  For the input array `[0, 2, 5, 4, 1]`, the missing number is `3`.

# Explanation of `maximumConsecutiveOnes` Function

## Problem: `Maximum Consecutive Ones` –

### Explanation using a For loop -->

1. **`let number = [1, 1, 0, 0, 1, 1, 1, 0];`**

   - This line declares an array named `number` containing binary digits (1s and 0s).
   - The array represents a sequence in which we want to find the maximum number of consecutive 1s.

2. **`const maximumConsecutiveOnes = (nums) => {`**

   - This line defines an arrow function named `maximumConsecutiveOnes` that accepts one parameter, `nums`, which represents the input array.

3. **`let maximum = 0;`**

   - This initializes a variable `maximum` to store the highest count of consecutive 1s encountered during the iteration.
   - It starts at 0.

4. **`let count = 0;`**

   - This line initializes a variable `count` that will track the current count of consecutive 1s as the array is traversed.

5. **`for (let i = 0; i < nums.length; i++) {`**

   - This for loop iterates through each element of the array from the first element (index 0) to the last element.

6. **`if (nums[i] == 1) {`**

   - This if statement checks if the current element (`nums[i]`) is equal to 1.

7. **`count++;`**

   - If the current element is 1, this line increments the `count` by 1, adding to the sequence of consecutive 1s.

8. **`maximum = Math.max(maximum, count);`**

   - This statement updates `maximum` to be the greater value between the current `maximum` and the current `count`.
   - It ensures that `maximum` always holds the highest count of consecutive 1s found so far.

9. **`} else {`**

   - This else block executes when the current element is not 1 (i.e., it is 0).

10. **`count = 0;`**

    - If a 0 is encountered, the `count` is reset to 0 since the sequence of consecutive 1s is broken.

11. **`}`**

    - Closes the if-else block.

12. **`console.log(maximum);`**

    - After the loop finishes, this line logs the final value of `maximum` to the console, which represents the maximum number of consecutive 1s found in the array.

13. **`maximumConsecutiveOnes(number);`**
    - Finally, the function `maximumConsecutiveOnes` is called with the `number` array as its argument, triggering the execution of the above logic.

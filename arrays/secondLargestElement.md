# Explanation of `secondLargestElement` Function

## Problem: `Second Largest Element` –

### Explanation using a For loop -->

1. **`let nums = [8, 8, 7, 6, 5];`**

   - This line declares an array named `nums` containing five numerical elements: `8, 8, 7, 6, 5`.

2. **`const secondLargestElement = (nums) => {`**

   - This line defines an arrow function called `secondLargestElement` that accepts one parameter, `nums`, which represents the input array.

3. **`let sortedArray = nums.sort((a, b) => a - b);`**

   - This line sorts the `nums` array in ascending order using the sort method with a compare function `(a, b) => a - b`.
   - After sorting, the smallest element is at the beginning and the largest is at the end of the array.

4. **`let largest = sortedArray[sortedArray.length - 1];`**

   - This statement assigns the last element of the sorted array (i.e., the largest element) to the variable `largest`.

5. **`let secondLargest = -Infinity;`**

   - This initializes the variable `secondLargest` with `-Infinity` to ensure that any valid number found in the array will be larger.

6. **`for (let i = sortedArray.length - 2; i >= 0; i--) {`**

   - This for loop iterates backward through the sorted array starting from the second last element (index `sortedArray.length - 2`) and continues until the beginning of the array (index `0`).

7. **`if (sortedArray[i] != largest) {`**

   - Within the loop, this if statement checks whether the current element is not equal to the `largest` element.
   - This condition is used to skip duplicate values of the largest element.

8. **`secondLargest = sortedArray[i];`**

   - Once an element different from the largest is found, it is assigned to the `secondLargest` variable as it represents the next highest value.

9. **`break;`**

   - The `break` statement exits the loop immediately after finding the second largest element.

10. **`console.log(secondLargest);`**

    - This line logs the value of `secondLargest` to the console, displaying the result.

11. **`secondLargestElement(nums);`**
    - Finally, the function `secondLargestElement` is invoked with the array `nums` as its argument, triggering the execution of the logic to find and print the second largest element.

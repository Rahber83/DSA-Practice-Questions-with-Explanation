# DSA-Practice-Questions-with-Explanation

# 1. Explanation of the reverseString.js file both Method
//Method-1: Explanation of Using for loop-->
// 1. let string = "hello world"; : This line declares a variable named `string` and assigns it the value "hello world". This is the string that will be reversed.

// 2. const reverseString = (string) => { : This line defines a function named `reverseString` using arrow function syntax. It takes one parameter, `string`, which is the input string that we want to reverse.

// 3. if(string.length === 0 || string.trim() === '') { : This is an if statement that checks if the input string is either empty or consists only of whitespace characters after trimming.
//    - string.length === 0 : Checks if the length of the string is 0, which means it is empty.
//    -  string.trim() === '' : string.trim() removes leading and trailing whitespaces from the       string. This part checks if the trimmed string is empty.
//If either of these conditions is true, it returns the message "String is Empty, Please Provide a String".

// 4. let reversedString = ''; : This line initializes an empty string called `reversedString` which will be used to store the reversed version of the input string.

// 5. for(let  i = string.length - 1; i >= 0; i--) { : This is a for loop that iterates through the characters of the input string in reverse order.
//    - let i = string.length - 1; : Initializes a loop counter `i` to the last index of the input string.
//    - i >= 0; : Specifies that the loop should continue as long as `i` is greater than or equal to 0.
//    - i-- : Decrements the value of `i` after each iteration.

// 6. reversedString += string[i]; : Inside the loop, this line appends the character at index `i` of the input string to the `reversedString`.
//    For example, if the input string is "hello world", during the first iteration `i` will be 10 (the last index), so it appends 'd' to `reversedString`. In the next iteration, it appends 'l', and so on.

// 7. return reversedString; : Once the loop completes, the function returns the `reversedString`.

// 8. console.log(reverseString(string)); : This line calls the `reverseString` function with the `string` variable (which is "hello world") as the argument. The result is then logged to the console.


//Method-2: Explanation of Using In-Built Function-->
// 1. let stringInBuilt = "hello world"; : This line declares a variable named `stringInBuilt` and assigns it the value "hello world". This is the string that will be reversed.

// 2. const reverseStringInBuilt = (stringInBuilt) => { : This line defines a function named `reverseStringInBuilt` using arrow function syntax. It takes one parameter, `stringInBuilt`, which is the input string that we want to reverse.

// 3. if(stringInBuilt.length === 0 || stringInBuilt.trim() === '') { : This is an if statement that checks if the input string is either empty or consists only of whitespace characters after trimming.
//    - stringInBuilt.length === 0 : Checks if the length of the string is 0, which means it is empty.
//    - stringInBuilt.trim() === '' : `stringInBuilt.trim()` removes leading and trailing whitespaces from the string. This part checks if the trimmed string is empty.
//    If either of these conditions is true, it returns the message `"String is Empty, Please Provide a String"`.

// 4. let reversedStringInBuilt = stringInBuilt.split('').reverse().join('') : This line reverses the input string using built-in string functions:
//    - stringInBuilt.split('') : This converts the string into an array of individual characters. For example, `"hello world"` becomes `['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']`.
//    - .reverse() : This reverses the order of the elements in the array.
//    - .join('') : This converts the array back into a string, with an empty string `''` as the separator. This effectively combines all the characters in the array back into a single string.
//    The result is assigned to the variable `reversedStringInBuilt`.

// 5. return reversedStringInBuilt; : The function then returns the `reversedStringInBuilt`.

// 6. console.log(reverseStringInBuilt(stringInBuilt)); : This line calls the `reverseStringInBuilt` function with the `stringInBuilt` variable (which is "hello world") as the argument. The result is then logged to the console.

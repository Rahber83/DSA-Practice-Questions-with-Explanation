//Method-1: Using the two Pointer Method
let palindromeString = "maa";
const stringPalindrome = (palindromeString) => {
    palindromeString = palindromeString.toLowerCase().replace(/[^a-z0-9]/g, '');
       
    let i = 0;
    let j = palindromeString.length - 1;

    while (i < j) {
        if(palindromeString[i] !== palindromeString[j]){
            return "String is Not Palindrome"
        }
        i++;
        j--;
    }
    return "String is Palindrome"
};
console.log(stringPalindrome(palindromeString));

//Method-1: Using For Loop
let string = "hello world";
const reverseString = (string) => {
    if(string.length === 0 || string.trim() === ''){
        return "String is Empty, Please Provide a String"
    }

    let reversedString = '';

    for(let  i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    return reversedString;
};

console.log(reverseString(string));


//Method-2: Using In-Built Function
let stringInBuilt = "hello world";

const reverseStringInBuilt = (stringInBuilt) => {
    if(stringInBuilt.length === 0 || stringInBuilt.trim() === ''){
        return "String is Empty, Please Provide a String"
    }

    let reversedStringInBuilt = stringInBuilt.split('').reverse().join('')
    return reversedStringInBuilt
};

console.log(reverseStringInBuilt(stringInBuilt));
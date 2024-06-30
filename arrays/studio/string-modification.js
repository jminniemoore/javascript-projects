const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let srtTwo = str.slice(3) + str.slice(0, 3)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The string '${str}' has been converted to '${srtTwo}'`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question('Select how many characters should be moved? ')
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let srtTwoUser = str.slice(numOfLetters) + str.slice(numOfLetters)
let output = `The string '${str}' has been convert to '${srtTwoUser}'`

console.log(output)
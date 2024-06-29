let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split())
//changed into an array
console.log(str.split('e'))
//removed the e and added a space w/ comma
console.log(str.split(' '))
//made each word seperate
console.log(str.split(''))
//split each letter and space
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join())
// removed the array brackets to turn into a string
console.log(arr.join('a'))
//added an a between after each 
console.log(arr.join(' '))
//removed , and added a space
console.log(arr.join(''))
//removed the space and ,
//3) Do split or join change the original string/array?
console.log('no it does not change the original string/array. it provides a new array/string when adding the method')
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','))

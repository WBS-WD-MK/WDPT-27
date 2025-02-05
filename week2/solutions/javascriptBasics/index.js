/**
 Declare Variables with let and const:

Use let to declare a variable named age and assign it the value 25.
*/
let age = 25;
/*
Use const to declare a variable named birthYear and assign it the value 1999.
Use let to declare a variable named name and assign it the value "John Doe".
Use const to declare a variable named isStudent and assign it the value true.
*/
const birthYear = 1999;
let name = 'John Doe';
const isStudent = true;
/*
Reassign Values:

Reassign the value of age to 26.
Reassign the value of name to "Jane Doe".
Try to reassign the value of birthYear to 2000 and observe what happens.
Try to reassign the value of isStudent to false and observe what happens.
Print Variables:
*/
age = 26;
name = 'Jane Doe';
// birthYear = 2000;
// isStudent = false;
/*

Use console.log to print the values of age, birthYear, name, and isStudent.
*/
console.log('values', age, birthYear, isStudent);
/*
Create and Modify a New Variable:

Use let to declare a variable named favoriteColor and assign it the value "blue".
Print the value of favoriteColor.
Reassign the value of favoriteColor to "green".
Print the new value of favoriteColor.
 */

let favoriteColor = 'blue';
console.log(favoriteColor);
favoriteColor = 'green';
console.log(favoriteColor);

// 2
/**
 Tasks:
Addition with Mixed Types

Create a variable that stores a number.
Create a variable that stores a string representation of a number.
Add these two variables and print the result.
Explain the output.
Subtraction with Mixed Types
*/
let number = 33;
let numString = 'adfasdf';
if (!isNaN(Number(numString))) {
  let result = number + Number(numString);
  console.log('sdfsdf', result);
} else {
  console.log('ERROR');
}
/*
Using the same string and number variables, subtract the string from the number and print the result.
Explain why the output differs from the addition.
Multiplication with a String
*/
console.log(numString * number);
/*
Multiply the string variable by a new number and print the result.
Division by a String

Divide a number by the string variable and print the result.
Modulus Operation

Use modulus on two number variables and print the result.
Change one of the numbers to a string and perform the modulus operation again. Print the result.
Perform a Series of Numeric Operations
*/
console.log('sdfdsf33', 4 % 5);
/*
Define several new numeric variables.
Perform and print the result of each operation: addition, subtraction, multiplication, division, and modulus.
For each operation, include at least one example that uses more than two numbers.
Notes:
Consider what happens when operations are performed on different data types.
JavaScript performs type coercion in certain operations. Reflect on how this affects the results.
 */

const num1 = 4;
const num2 = '5';
const num3 = 6;
const res1 = num1 + num2 + num3;
const res2 = num1 * num2;
const res3 = num3 / num1;
const res4 = num2 % num1;
console.log(res1, res2, res3, res4);

//3

/*
Task Overview:

Use the following values for comparisons: 5, '5', 10, '10', true, false.
Perform comparisons using both simple and strict equality and inequality operators.
Compare values to determine if they are greater than, less than, greater than or equal to, or less than or equal to each other.
Specific Tasks:
*/
// == value only
// === type and value
console.log(5 == '5');
console.log(5 === '5');
console.log(5 > 4, 3 <= 1, 5 > 10, 4 < 6, 3 !== 4);
/*
Compare 5 and '5' using simple and strict equality.
Compare 10 and '10' using simple and strict inequality.
Check if 5 is greater than 3 and if '5' is greater than '3'.
*/
console.log('5' > '3');
console.log(5 >= '5');
/*
Evaluate whether 10 is less than 20 and if '10' is less than '20'.
Determine if 5 is greater than or equal to 5 and if '5' is greater than or equal to 5.
Assess whether 10 is less than or equal to 20 and if '10' is less than or equal to '20'.
Output:

Print each result to the console with a descriptive message, so you know which comparison is being displayed.
 */
// 4
/**
Define a variable temperature and set it to any integer to represent the temperature in degrees Celsius.
Use if/else to advise wearing a coat if the temperature is below 15 degrees.
Use if/else if/else to give advice based on three temperature ranges:
Below 15 degrees: suggest a coat.
Between 15 and 25 degrees: suggest a sweater.
Above 25 degrees: suggest a t-shirt.
Use a switch statement to provide advice based on specific temperatures (just a few for example): 10, 20, and 30 degrees.
Print the results for each task to the console.
Play with different values for temperature and different scenarios!
 */
const temp = 9;

if (temp < 15) {
  console.log('wear a coat!');
} else {
  console.log('its nice weather today');
}
if (temp < 15) {
  console.log('wear a coat!');
} else if (temp >= 15 && temp < 25) {
  console.log('sweater');
} else {
  console.log('t-shirt');
}
switch (temp) {
  case 10:
    console.log('Its very cold');
    break;
  case 20:
    console.log('its nice and sunny');
    break;
  case 30:
    console.log('What is happening its super hot');
    break;
  default:
    console.log('unknown number');
    break;
}
switch (true) {
  case temp > -40 && temp < 10:
    console.log('Its very cold');
    break;
  case temp === 20:
    console.log('its nice and sunny');
    break;
  case temp === 30:
    console.log('What is happening its super hot');
    break;
  default:
    console.log('unknown number');
    break;
}
// 5

/**
 * Use a for loop to count the total number of animals.
Use a while loop to count animals whose names have five or more letters. You can check the length of a string 
Use a do...while loop to count animals until you encounter an animal whose name starts with 'm'
Yes, yes, we could do this with array methods! But those declarative approaches use these basic loop constructs under the hood! So we better learn them! 😊
 */
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey', 'sdfsdf'];
let animalCount = 0;
for (let i = 0; i < animals.length; i++) {
  // animalCount++
  // animalCount+=1
  animalCount = animalCount + 1;
}
console.log(animalCount);

let countFive = 0;
let index = 0;
while (index < animals.length) {
  console.log(animals[index].length);
  if (animals[index].length >= 5) {
    countFive++;
  }
  index++;
}
console.log(countFive);

let countUntilM = 0;
let i = 0;
do {
  const animal = animals[i].toLowerCase();
  if (animal[0] === 'm') {
    break;
  }
  console.log('WHATSUP', animals[i]);
  countUntilM++;
  i++;
} while (i < animals.length);
console.log('Count until M ', countUntilM);

console.log(typeof animals);
console.log(Array.isArray(animals));

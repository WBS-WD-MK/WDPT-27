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
  countUntilM++;
  i++;
} while (i < animals.length);
console.log('Count until M ', countUntilM);

console.log(typeof animals);
console.log(Array.isArray(animals));
// 6
/*
Functions
Part 1: Function Declarations
Declare a function with no parameters that outputs something to the console.

Declare a function named greet that logs "Hello, World!" to the console.
*/
function greet() {
  console.log('Hello, World!');
}
/*
Call the function.
*/
greet(); // Output: Hello, World!
/*
Declare a function with one parameter that returns something.
Declare a function named square that takes a number as a parameter and returns its square.
*/
function square(number) {
  return number * number;
}
/*

Call the function with the argument 5, store the result in a variable, and output it to the console.
*/
let resultSquare = square(5);
console.log(resultSquare); // Output: 25
/*
Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly.

Declare a function named getDayName that takes a number (0-6) as a parameter and returns the name of the day.
Use a switch statement to determine the day name.
Call the function with the argument 3, store the result in a variable, and output it to the console.
*/
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = 'Sunday';
      break;
    case 2:
      dayName = 'Monday';
      break;
    case 3:
      dayName = 'Tuesday';
      break;
    case 4:
      dayName = 'Wednesday';
      break;
    case 5:
      dayName = 'Thursday';
      break;
    case 6:
      dayName = 'Friday';
      break;
    case 7:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number';
  }
  return dayName;
}
let resultDayName = getDayName(3);
console.log(resultDayName); // Output: Wednesday
/*
Part 2: Function Expressions
Repeat the above steps using function expressions assigned to variables.
Rewrite the greet function as a function expression assigned to a variable named greetExpression.
Rewrite the square function as a function expression assigned to a variable named squareExpression.
Rewrite the getDayName function as a function expression assigned to a variable named getDayNameExpression.
Discussion:
Discuss the difference between function declarations and function expressions.
*/
// 1. Function expression with no parameters
const greetExpression = function () {
  console.log('Hello again, World!');
};
const greetArrow = () => {
  console.log('Hello again, World!');
};
// Call the function
greetExpression(); // Output: Hello again, World!
greetArrow();
// 2. Function expression with one parameter
const squareExpression = function (number) {
  return number * number;
};

// Call the function and store the result
let resultSquareExpression = squareExpression(5);

// Output the result to the console
console.log(resultSquareExpression); // Output: 25

// 3. Function expression with one parameter and a switch statement
const getDayNameExpression = function (dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number';
  }
  return dayName;
};

// Call the function and store the result
let resultDayNameExpression = getDayNameExpression(3);

// Output the result to the console
console.log(resultDayNameExpression); // Output: Wednesday
/*
Discussion:
- Function declarations are hoisted to the top of their scope, meaning they can be called before they are declared in the code.
- Function expressions are not hoisted, so they cannot be called before they are defined.
*/

//7
/**
 Global and Function Scope with var:

Declare a global variable using var and log it.
*/
var myVar = 'Global with var';
/*
Inside a function, declare another var variable with the same name but different value and log it within the function.
Call your function. 
Log your global variable. Did it change? No! This is function scope!
*/
function test() {
  // var, let and const behave very similar whtn it comes to function scope
  var myVar = 'Function scoped with var';
  console.log(myVar);
}

test();

console.log(myVar);
/*
Block Scope with let and const:

Inside a block (use an if statement with a condition of true), declare variables using let and const. Try redeclaring them within the same block to observe errors.
Try to log them inside and outside the if statement. What happens?
Redeclaration with var:
Try to redeclare your original global variable with var within the if block, log it in and outside the statement. What happens?
*/

if (true) {
  let myLetVar = 'something';
  const myConstVar = 'something else';
  var myVar = 're-declared';
  // let myLetVar = 'something';
  // const myConstVar = 'something else';
  console.log(myLetVar);
  console.log(myConstVar);
  console.log(myVar);
}
// let and const are scoped to the blocks they are declared in
// console.log(myLetVar);
// console.log(myConstVar);
console.log(myVar);
/*
Usage of const for Arrays and Objects:

Declare an array and an object using const. Modify the contents of both and log their values before and after the changes.
constis suggested for arrays and objects declaration since it's only the contents that change but not the reference!

 */
const myArray = [1, 2, 3];
const myObj = { name: 'john' };
console.log(myArray);
myArray.push(4);
console.log(myArray);
myObj.age = 10;
console.log(myObj);

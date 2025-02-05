const arr = ['a', 'b', 'c', 'd'];
console.log(arr);
// we access values from 0

// first value in the array
console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}
console.log(arr.length);
console.log('Last char', arr[arr.length - 1]);

console.log('Last char', arr.at(-1));

// array methods
// add to the end of the array
console.log('----');
//add a new element to the end of the array
arr.push('e');

console.log(arr);
// take the last element out of the array
const lastChar = arr.pop();
console.log(arr);
console.log(lastChar);

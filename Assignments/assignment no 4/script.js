// ================================
// JS (Part 4) Practice Questions
// ================================

// Qs1. Delete all occurrences of element ‘num’ in a given array.
// Example: arr = [1,2,3,4,5,6,2,3], num = 2 → Result = [1,3,4,5,6,3]

let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == num) {
    arr1.splice(i, 1);
    i--; // adjust index after splice
  }
}

console.log("Qs1 Result:", arr1);


// --------------------------------

// Qs2. Find the number of digits in a number.
// Example: number = 287152 → count = 6

let number1 = 287152;
let count = 0;
let copy1 = number1;

while (copy1 > 0) {
  count++;
  copy1 = Math.floor(copy1 / 10);
}

console.log("Qs2 Result:", count);


// --------------------------------

// Qs3. Find the sum of digits in a number.
// Example: number = 287152 → sum = 25

let number2 = 287152;
let sum = 0;
let copy2 = number2;

while (copy2 > 0) {
  let digit = copy2 % 10;
  sum += digit;
  copy2 = Math.floor(copy2 / 10);
}

console.log("Qs3 Result:", sum);


// --------------------------------

// Qs4. Print the factorial of a number n.
// Example: 5! = 1×2×3×4×5 = 120

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log("Qs4 Result:", factorial);


// --------------------------------

// Qs5. Find the largest number in an array with only positive numbers.
// Example: arr = [3, 56, 23, 89, 12] → largest = 89

let arr2 = [3, 56, 23, 89, 12];
let largest = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > largest) {
    largest = arr2[i];
  }
}

console.log("Qs5 Result:", largest);


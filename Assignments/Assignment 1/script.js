// Q-1

let num = 20;
if (num % 10 == 0) {
    console.log("Good")
} else {
    console.log("bad")
}

// Q-2

let name = prompt("Please enter your name")
let age = prompt("Please enter your age")
alert(`${name} is ${age} yeaes old. `)

// Q.3

let quarter = 1;
switch (quarter) {
    case 1: console.log("january , february , march")
        break;
    case 2: console.log("april , may , june")
        break;
    case 3: console.log("july , August , sept")
        break;
    case 4: console.log("october , nov , Dec")
        break;
    default: console.log("Its is not a quarter")

}


// Q-4

let str = "apples"; 
if ((str[0] == 'a' || start[0] == 'A') && (str.length > 5)) {
     console.log("goldenstring"); 
    } else { 
        console.log("notagoldenstring"); 
    }
// Q-5

let a = 5;
let b = 18;
let c = 13;

if (a > b) {
if (a > c) {
console.log(a, "is largest");
} else {
console.log(c, "is largest");
}
} else {
if (b > c) {
console.log(b, "is largest");
} else {
console.log(c, "is largest");
}
}

// Q-6

let num1 = 32;
let num2 = 47852;
if((num1%10) == (num2%10)) {
console.log("number have the same last digit which is " , num1%10)
} else {
    console.log("number dont have the same last digit")
}

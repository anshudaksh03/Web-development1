// Destructuring kya hoti hai JavaScript me
// Destructuring ka matlab hota hai —
// Array ya Object ke andar se data ko short aur easy way me nikalna.
// 🔹 1. Array Destructuring
// Normal way 👇
// let arr = [10, 20, 30];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a, b, c);
// Destructuring way 👇

// let arr = [10, 20, 30];
// let [a, b, c] = arr;
// console.log(a, b, c); // 10 20 30
// Yahaan humne directly array ke elements ko variables me le liya — short aur clean code.


//***************************************************************************************** */

// let name = ["tony", "bruce","peter","steve","abc", "def","fik"];
// // let winner = name[0];
// // let runner = name[1];
// // let secondRunner = name[2];
// // ***** destruchering ************
// // let [winner , runner , other] = name;
// let [winner , runner , ...other] = name;// withb rest method
// console.log(winner) // tony
// console.log(other)// peter
// console.log(...other)//['peter', 'steve', 'abc', 'def', 'fik'] as an array

// ********* destruchering in object*****************************
// Normal way 👇

// let user = { name: "Anshu", age: 20 };
// let name = user.name;
// let age = user.age;
// console.log(name, age);

// Destructuring way 👇

// let user = { name: "Anshu", age: 20 };
// let { name, age } = user;
// console.log(name, age); // Anshu 20

// Yahaan user ke andar jo keys hain (name, age)
// wo directly variables ban gaye same naam se.
// 3. Variable rename karna

// let person = { name: "Vimal", age: 25 };
// let { name: personName } = person;
// console.log(personName); // Vimal

// 👉 Yahaan name ko humne rename karke personName bana diya.
// Destructuring matlab — array ya object ke andr ka data short way me nikalna.
// Jaise arr[0] likhne ki jagah [a,b] = arr likh dete hain.
// Clean aur easy code ke liye use hota hai

// ****************************destruchering in object**********************************
const student = {
name: "Anshu",
age: 20,
class: 12,
subject:["hindi","english","math","science"],
username: "Anshu936874",
password: "123456@344"
}
   // this is not good way  
// let username = student.username
// let password = student.password
       // *****destruchering*****
let {username , password} = student;
console.log(username)//Anshu936874
let {username:user , password:secret , city = "Delhi"} = student;
console.log(user)//Anshu936874
console.log(city)//Delhi

// Spread Operator (...) kya hota hai?

// spread operator (...) ka kaam hota hai —
// array ya object ke elements ko “phaila dena” (spread kar dena).
// Ye kisi array ya object ko individual values mein tod deta hai.


// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(Math.min(...arr)) // 1
// console.log(...arr) //1 2 3 4 5 6 7 8 9
// console.log(..."apna college") // out - a p n a   c o l l e g e

// *******Spread with array literals*****************************************************

// let arr = [1,2,3,4,5,6]
// let newarr = [...arr]
// console.log(newarr) // [1, 2, 3, 4, 5, 6] array in array formate
// //************** */
// let chars = [..."hello"]
// console.log(chars) // ['h', 'e', 'l', 'l', 'o'] same as
//******************** */

// let odd = [1,3,5,7,9]
// let even = [2, 4, 6, 8, 10]
// let nums = [...odd, ...even]
// console.log(nums) // [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// **************************
// let odd = [1,3,5,7,9]
// let even = [2, 4, 6, 8, 10]
// let nums = [...even, ...odd]
// console.log(nums)  //  [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]


// *******Spread with object  literals*****************************************************
let data = {
    email: "anshu947876@gmail.com",
    password:"abcde"
}
let datacopy = {...data,id:123, id:123}
console.log(datacopy)
//*********************** */
let arr = [1,2,3,4,5,6]
let obj1 ={...arr} // obj: key:value
console.log(obj1) // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}

//*********************** */

let obj2 = {..."Hello"}
console.log(obj2) // {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}


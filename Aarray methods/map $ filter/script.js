// 💡 map() kya hota hai

// map() ek array method hota hai
// jo array ke har element par ek function chalata hai
// aur naya array return karta hai — jisme updated values hoti hain ✅

// *********************************************************************

// let num = [1,2,3,4,5];
// let double = num.map((el)=>{
// return el*2;
// })
// console.log(double)

//********************************************************* */

// let student = [
//     {
//         name: "Anshu",
//         marks:95,
//     },
//     {
//         name: "Vikas",
//         marks:99,
//     },
//     {
//         name: "Preeti",
//         marks:85,
//     },
// ]
// let gpa = student.map((el) => {
//     return el.marks / 10;
// })
// console.log(gpa)

// ******************************filter function ***************************

// filter() ek array method hai jo array ke sirf un elements ko return karta hai jo condition pass karte hain.

// Matlab:
// 👉 Tum ek array dete ho,
// 👉 ek condition likhte ho,
// 👉 aur filter() sirf un values ko naya array me return karta hai jo condition true karti hain.



let num = [1,2,3,4,5,6,7,8,9]
let even = num.filter((el) => {
    // return el % 2 == 0; //even = true, odd-> false
    // return el % 2 != 0; // oddnumberas ka liya
    return el < 5 // ab sa kam sara print honga
}) 
console.log(even)

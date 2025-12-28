// forEach() kya hota hai

// forEach() ek array method hota hai
// jo array ke har element par ek function chalata hai.

// Matlab — agar array mai 5 elements hain,
// to forEach() wo function 5 baar chalata hai — har element ke liye ek baar
//************************************************************************************ */
// let arr = [1,2,3,4,5,6]
// let print = function (el){
//     console.log(el)
// };
// arr.forEach(print)

// *************************************

// let arr = [1,2,3,4,5,6]
// arr.forEach((el) => { // arrow function function 
//     console.log(el)
// })


// arr.forEach(function (el){ // function with print
//     console.log(el)
// })


//**************** array object ******************** */

let arr = [
    {
        name: "Anshu",
        marks:95,
    },
    {
        name: "Vikas",
        marks:99,
    },
    {
        name: "Preeti",
        marks:85,
    },
]
arr.forEach((student)=>{
    console.log(student.marks)
})



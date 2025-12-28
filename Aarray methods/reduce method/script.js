// What is reduce()?

// reduce() JavaScript ka array method hai.
// Ye poore array ko process karke ek single value return karta hai.

// Jaise:

// saare numbers ka sum nikalna

// sab numbers ka multiply karna

// array se maximum value nikalna

// ya even objects ka total price calculate karna

// **********************************************************************

// let num = [1,2,3,4];
// let finalvalue = num.reduce((res , el) => res + el);
// console.log(finalvalue)


// **********maximum in array by reduce function **************
let arr = [1,2,5,7,3,8,10,11,9]
let max = arr.reduce((max , el) => {
    if(max < el){
        return el;
    } else{
        return max;
    }
})
console.log(max)

//********* */ by using loop************************
// let arr = [1,2,5,7,3,8,10,11,9]
// let max = -1;
// for(let i = 0; i< arr.length; i++){
//     if(max < arr[i]){
//         max =arr[i];
//     }
// }
// console.log(max)


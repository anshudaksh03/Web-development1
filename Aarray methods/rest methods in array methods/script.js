// Rest Operator (...) kya hota hai?

// rest operator ka kaam hota hai
// ➡️ baaki bache huye (remaining) values ko collect karna ek array ke andar.

// Iska symbol bhi ... hi hota hai (same jaise spread),
// lekin iska use ulta hota hai 👇

// Spread: elements ko todta hai

// Rest: elements ko jodta hai (collect karta hai)
// *********************************************************

// function sum(...args){
//     return args.reduce((add,el) => add + el);
// }

// *************************

// function sum(...args){ // argument
//     for(let i=0; i< args.length; i++){
//         console.log("you gave us",args[i]);
//     }
   
// }
// sum(1,2)

// *******************************
// function sum(){
//     return atguments.reduce((sum,el) => sum+el)
// }
// console.log(sum(1,2,3,4,5,6,7))  // ab iss mai add n hoga kyu ki as a array define hota hai par hum uss ko add kya access n kr sakta uss ka liya huma poaramewters pass krna honga

// /****************************** like this type arument pass krna hoga  */

// function sum(...args){
//     return args.reduce((sum,el) => sum+el)
// }
// console.log(sum(1,2,3,4,5,6,7)) // 28

// *****************print min value*****************

function min(msg,...args){
    console.log(msg)
    return args.reduce((min,el) => {
        if(min > el){
        return el;
        } else{
            return min;
        }
    })
}

console.log(min("Hello",12,34,66,100))//Hello
                                      //  12

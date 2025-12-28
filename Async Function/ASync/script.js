


// ***************************Async functioon to type  async keyword and await****************************


// ******************Async keyword*****************************

// async function greet(){
//    throw("Weak Connection")
//     return("Hellow")
// }
// greet()
// .then((result)=>{
//     console.log("Promise Was successful completed")
//     console.log("Result was :", result)
// })
// .catch((err)=>{
//     console.log("Promise was rejected with error :" , err)
// })

// *****************prmose ******
// let demo = async ()=>{
//     return 5;
// }
// console.log(demo())


// *****************Await keyword**************************
// The await keyword is used to pause the execution of a function until a Promise is resolved or rejected.


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num)
//             resolve();
//         }, 1000)
//     });
// }
//  async function demo() {
//     await getNum();
//    await getNum();
//    await getNum();
//  }

// ************************************************

// h1 = document.querySelector("h1")

// function changeColor(color,delay){
//   return new Promise((resolve , reject)=>{
//  setTimeout(()=>{
//        h1.style.color = color;
//       resolve("color changed")
//     }, delay)
// })
//    }

//    async function demo(){
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//    }
   

//**********************Handeliing Rejection*************** */

h1 = document.querySelector("h1")

function changeColor(color,delay){
  return new Promise((resolve , reject)=>{
 setTimeout(()=>{
    let num = Math.floor(Math.random() * 5) + 1;
    if(num>3){
        reject("promise rejected")
    }
       h1.style.color = color;
      resolve("color changed")
    }, delay)
})
   }

   async function demo(){
    try{
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    } catch(err){
        console.log("Error Cought")
        console.log(err)
    }
let a = 5;
console.log(a);
console.log("new number", a+3)
   
   }
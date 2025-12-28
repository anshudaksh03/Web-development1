// let btn = document.querySelector("button")
// btn.addEventListener("click", function(event){
//     console.log(event)
//     console.log(" Buttone Clicked")
// })
// ***********************************************

// let inp = document.querySelector("input")
// inp.addEventListener("keydown", function(event){
//     console.log(event)
//     console.log("code is = " , event.code)
//     console.log("key is = ", event.key)
//     console.log("Key was passed")
// })

// inp.addEventListener("keyup", function(){
//     console.log("Ket was realeased")
// })

// ***************************************************************

let inp = document.querySelector("input")
inp.addEventListener("keydown", function(event){
    console.log("code = " , event.code); //ArrowUp , ArrowDown, Arrowleft, ArrowRight
   if(event.code == "ArrowUp"){
    console.log("Charcter move forword")
   } else if (event.code == "ArrowDown"){
    console.log("Charcter move Backword")
   }else if (event.code == "Arrowleft") {
    console.log("Charcter move left")
   } else if(event.code == "ArrowRight") {
    console.log("Charcter move Right")
   }
})
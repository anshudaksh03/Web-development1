// // change events  and input event
// let form = document.querySelector("form")
// form.addEventListener("submit", function(event){
//     event.preventDefault()
// })

// let user = document.querySelector("#user")
// user.addEventListener("change",function(){ // yea dega input value 
//     console.log(" change events")
//    // console.log("final value = ", user.value) // optional
//     console.log("final value = ", this.value)
// })
// user.addEventListener("input",function(){ // yea daga final value
//     console.log("input events")
//    // console.log("final value = ", user.value) // optional
//     console.log("final value = ", this.value)
// })

// **************************Activity***********************************

let inp = document.querySelector("#text")
let p = document.querySelector("p")
inp.addEventListener("input", function(){
    console.log(inp.value)
    p.innerText = inp.value
})
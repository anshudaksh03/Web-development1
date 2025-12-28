// let form = document.querySelector("form")
// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     let user = document.querySelector("#user")
//     let pass = document.querySelector("#pass")
//     console.log(user.value)
//     console.log(pass.value)
//     alert(`hii ${user.value} , your password is set to ${pass.value}`)
// })

// ************************Way 2nd*******************************

let form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    console.dir(form)
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value)
    console.log(pass.value)
    alert(`hii ${user.value} , your password is set to ${pass.value}`)
    
}) 
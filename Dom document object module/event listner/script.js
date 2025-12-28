// addEventListener
let btns = document.querySelectorAll('button')
for(btn of btns){
    // btn.addEventListener("click", sayhellow)
    // btn.addEventListener("click", sayname)
    btn.addEventListener("dblclick", function(){
        console.log("You clicked double click")
    })
}
function sayhellow() {
    alert("hello Anshu")
}
function sayname() {
    alert("Anshu")
}
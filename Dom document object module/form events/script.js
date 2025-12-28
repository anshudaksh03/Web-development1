let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.defaultPrevented() // iss sa jo hum call back da r hai wo hi hoga hata ka jo url open ho r tha jo action wo n hoga
    console.log("Form was submitted")
})
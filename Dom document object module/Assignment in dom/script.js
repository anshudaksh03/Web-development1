// Qs1 Events
window.addEventListener("load", () => console.log("Page Loaded!"));
window.addEventListener("scroll", () => console.log("Scrolling..."));
document.addEventListener("keypress", e => console.log("Key:", e.key));

// For mouseout
let tempBox = document.createElement("div");
tempBox.id = "box";
tempBox.style.width = "200px";
tempBox.style.height = "100px";
tempBox.style.background = "lightblue";
tempBox.innerText = "Hover Me";
document.body.appendChild(tempBox);

tempBox.addEventListener("mouseout", () => console.log("Mouse Out!"));

// Qs2 Button color change
let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
});

// Qs3 Input + H2 Display
let input = document.createElement("input");
input.placeholder = "enter your name";
document.body.appendChild(input);

// Create H2 if not in HTML
let heading = document.createElement("h2");
heading.id = "display";
heading.innerText = "";
document.body.appendChild(heading);

input.addEventListener("input", function () {
    // Allow only letters and space
    let cleanText = input.value.replace(/[^a-zA-Z ]/g, "");
    
    input.value = cleanText;  // removes bad characters
    heading.innerText = cleanText;  // live update
});

//  ***********Select elements****************************

// ************ getElementById*****************document.getElementById(id)******

//***************** console code******************** */

// document.getElementById("mainImg")
// <img src=​"assets/​spiderman_img.png" id=​"mainImg">​
// let imgObj = document.getElementById("mainImg");
// undefined
// imgObj
// <img src=​"assets/​spiderman_img.png" id=​"mainImg">​
// console.log(imgObj)
// undefined
// console.dir(imgObj)
// VM834:1 img#mainImg
// undefined

// imgObj.src
// 'http://127.0.0.1:5500/java%20Script/Dom%20document%20object%20module/Dom/assets/spiderman_img.png'
// imgObj.tagName
// 'IMG'
// imgObj.id
// 'mainImg'
// imgObj.src = "assets/creation_1.png"
// 'assets/creation_1.png'

// *********************************************************************************

// ************ getElementByClass*****************document.getElementById()******
// let smallimg = document.getElementsByClassName("oldImg");
// for(let i = 0; i < smallimg.length; i++){
//     smallimg[i].src = "assets/spiderman_img.png";
//     console.log(`the value of imageno 1 ${i} is changed`) // old images  mai sab images chanage ho jaye ghi spiderman ki images sa
// }

// ************ getElementByTagName*****************document.getElementByTagName()******

// let tagename = document.getElementsByTagName("p")
// console.log(tagename)

// ***************querySelector***********************
//console.log(document.querySelector("h1"))
// console.dir(document.querySelector("h1"))
// console.dir(document.querySelector("#description"))
// console.dir(document.querySelector("div a"))

// ***************querySelectorAll*****All selector p ele,ments******************

// console.dir(document.querySelectorAll("div a"))

// ************ sitting content in objects**************************
// let para = document.querySelector("p") 
// console.log(para.innerText)// jo hamari screen pa dekhai data hai uss ko inner text bolta 
// console.log(para.innerHTML)//hamra poora html markup dekhai data hai
// console.log(para.textContent)//agar man lpo kuch property use ki kuch none kar diya display pa nahi dekh raha par textcontent mai hamasa dekhai daga

//console.log(para.innerText = "Anshu") // hum change  bhe kara sakta haiu
// console.log(para.innerText = "abc my Name is <b> Anshu </b>") // print hoga abc my Name is <b> Anshu </b>
// console.log(para.innerHTML = "abc my Name is <b> Anshu </b>") // iss mai ab bold ho  jaye ga anshu
// console.log(para.innerHTML = `<u> ${para.innerText} </u>`)
//console.log(para.innerText = `<u> ${para.innerText} </u>`)


//**************** mainipulation Attribute************************ */

// let img = document.querySelector('img') 
// console.log(img)
// console.log(img.getAttribute('id')) // mainimage
// console.log(img.setAttribute('id','spidermanImg')) //  spider man ki class mai change hoga ti image  he badi ho jayegi

// **************manipulation styling *************************
// let heading = document.querySelector('h1')
// heading.style.color = 'purple'
// heading.style.color = 'green'
// heading.style.backgroundColor = 'pink'

// *******anchor text manipulation****
// let links = document.querySelectorAll(".box a")
// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "purple";
// }

// ***************2nd way to change color anchor*****************
// for(link of links){
//     link.style.color = "green" // inline cssc
// }

// ***************mainupulation style when we have multiple class********
// let heading = document.querySelector('h1')
// console.log(heading.classList)

//**********add class mainupulation **************/
// let heading = document.querySelector('h1')
// heading.classList
// heading.classList.add('green')

// *************** navigation on page*********/*********** */
//1- parentElement ,2 children ,3 previousElementSibiling /4 nextElementSibling

// let h4 = document.querySelector('h4');

// console.log(h4.parentElement)
// console.log(h4.children)

// let box = document.querySelector('.box')
// console.log(box.children)
// console.log(box.childElementCount)
// let ul = document.querySelector('ul')
// console.log(ul.parentElement)
// console.log(ul.childElementCount)
// console.log(ul.children)
// console.log(ul.children[0])
// console.log(ul.children[1])
// console.log(ul.children[2])
// console.log(ul.children[2].previousElementSibling)
// console.log(ul.children[1].previousElementSibling)
// console.log(ul.children[1].nextElementSibling)

// let img = document.querySelector('img');

// console.log(img.previousElementSibling);
// console.log(img.previousElementSibling.style);
// img.previousElementSibling.style.color = "green";

//****************Add element in our document**** document.createElement('p')****** */
//1 appendChild(element) 2 append(element) 3 prepend(element) 4 insertAdjacent(whwre,element)

// document.createElement('p')
// let newP = document.createElement('p')
// console.dir(newP)
// newP.innerText = "hii,I am new p"
// console.dir(newP)
// let body = document.querySelector('body')
// body.appendChild(newP)

// let box = document.querySelector('.box') 
// box.appendChild(newP) // ab hamara new p box ka andar aa jaye ga\

// let btn = document.createElement('button')
// console.dir('btn')
// btn.innerText = "click me"
// box.appendChild(btn) // btn create ho jaye gi

//**** add content in p using append last mai add krta hai  */
// newP.append('this is new text')
// newP.append(btn)
// newP.append("do not click this btn")

/***********  prepend yea hamesha starting mai add krta hai ********** */
// box.prepend(newP) // to hamara sara content po ka staring mai pahuch jaye ga

//************ insertAdjacent ********************/
// let btn = document.createElement('button')
// btn.innerHTML = "New button"
// let p = document.querySelector('p')
// console.log(btn)
// console.log(p)
// p.insertAdjacentElement('beforebegin', btn)
// p.insertAdjacentElement('afterbegin', btn)
// p.insertAdjacentElement('beforeend', btn)


// *****************************Remove elements ***********************
//1 - removeChild(element) , 2- remove(element)
let btn = document.createElement('button');
btn.innerHTML = "New button";

let p = document.querySelector('p');
console.log(btn);
console.log(p);

// Insert the button (final position = inside <p> at the end)
p.insertAdjacentElement('beforebegin', btn);
p.insertAdjacentElement('afterbegin', btn);
p.insertAdjacentElement('beforeend', btn);

// Remove the button safely
btn.remove(); // safest and recommended
p.remove()






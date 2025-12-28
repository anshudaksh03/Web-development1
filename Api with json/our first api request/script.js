// let url = "https://catfact.ninja/fact";

// fetch(url)

// .then((res) => {

//    return res.json();
// })
// .then((data)=>{
//     // console.log(data)
//     console.log("Data 1 - ",data.fact)
//     return fetch(url)
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("Data 2 = ",data2.fact)
// })
// .catch((err) => {
//     console.log("Error", err)
// });

// console.log("I am so happy")


// //******************** */ using fatch with async await**************

let url = "https://catfact.ninja/fact";

async function getfacts() {
    try{
    let res = await fetch(url)
    let data = await res.json();
    console.log(data)
    let res2 = await fetch(url)
    let data2 = await res2.json();
    console.log(data2)
    } catch(e) {
        console.log("error", e)
    }
    console.log("bye")
   
}
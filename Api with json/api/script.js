//   json to js object mai convert krna ka code

let jsonRes = 
'{"fact":"Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby. Legend says that tabby cats have an \u201cM\u201d for Mohammed on top of their heads because Mohammad would often rest his hand on the cat\u2019s head.","length":210}'
let validRes = JSON.parse(jsonRes)
console.log(validRes)


// //  js object  to json mai convert krna ka code

let student = {
    name: "Anshu",
    class: "Btech",
    age: 20
}
 
let jstojson = JSON.stringify(student)
console.log(jstojson)

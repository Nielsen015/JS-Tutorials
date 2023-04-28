/*
The DOM - Document Object Model
- is a programming interface for HTML and XML documents
- provides a structured representation of a documents
- defines methods to access the structure and manipulate it
- connects web pages tot scripts or programming languages
the page content is stored in the DOM and can be accessed and manipulated by JavaScript
*/
// console.log(document);
// document.body.innerHTML = "<h1>trial and error</h1>";
// document.body.innerText = "trial and error";
const myTag = document.getElementsByTagName("p");
console.log(myTag[0].innerHTML.length)
myTag[1].innerHTML = "I am a software Engineer :D"
for(let tag = 0;tag < myTag.length;tag++){
    myTag[tag].innerHTML = "Modified"
}
for(const p of myTag){
    p.innerHTML = "Renamed Again :D"
}
// getting an Element by ID
const spanTag = document.getElementById("span");
// for(const span of spanTag){
    span.innerHTML = "yoo"
// }
// 
const myDiv = document.getElementById("site");
const mySpan = myDiv.getElementsByTagName("span");
for(const span of mySpan){
   span.innerHTML = "Hello"
}
const myStyle =document.querySelector("span");
myStyle.style.color = "#24360e"
const total = document.getElementById("total");
total.innerHTML = mySpan.length

const members = document.getElementById("team");
const names = members.getElementsByTagName("LI");
names[4].innerHTML = "Karogo"
for(let name of names){
    if(name.innerHTML ==="Allan"){
        name.innerHTML = 'Mudanyi'
    }
}
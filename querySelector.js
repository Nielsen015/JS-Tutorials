const myFavePlayers = ["Bruno","Rashford", "Casemiro", "Degea","sancho"]
const myStyle = document.querySelector("div");
myStyle.style.color = "red";
myStyle.style.fontSize = "1.5rem";
myStyle.parentNode.style.backgroundColor = "teal"
/*
querySelector grab single element
querySelectorAll grabs multiple elements
*/

const myClass = document.querySelectorAll(".text");
for(const prop of myClass){
    prop.style.color = "#fff"
    // prop.classList.remove("text")
}

console.log(myClass.length);

const mySpan = document.querySelectorAll(".text span");
for(span of mySpan){
    span.style.color = "red"
}
//  console.log(myClass.parentNode);
//  console.log(mySpan.childNodes);

const elId = document.getElementById("footer");
const lId = elId.id;
// console.log(lId)
const replacementId = "bottom";
elId.id = replacementId
console.log(elId)
// defining div that don't have ids
// const el = document.getElementsByTagName("div");
// const footerDiv = el[el.length-1];
// footerDiv.id = "footer"
// footerDiv.className = "top"

// console.log(footerDiv);
const foot = document.querySelector(".foot");
foot.style.backgroundColor = 'teal';
foot.style.border = "2px solid white"
foot.style.height = "50px";
foot.style.width = "50px";
foot.className ="text try";
foot.style.borderRadius = "50%";
console.log(foot)
// listing of classes
const myDiv = document.querySelectorAll(".text");
for(prop of myDiv){
    console.log(prop.classList);
    prop.classList.add("foo")
}
// removing a class
setTimeout(()=>{
    for(const prop of myDiv){
        prop.classList.remove("foo");
    }
},1000);
// check if a class exists if not add, if exist remove
for(prop of myDiv){
    prop.classList.toggle("foo");
}
// elements
const createdDiv = document.getElementById("created");
// create a new element
const newEle = document.createElement("div");
// assign value to element
newEle.innerText = "hi am a new paragraph"
console.log(newEle)
// add a class inside element
newEle.classList.add("foot")
// append the Element to the DOM
createdDiv.appendChild(newEle);
// creating a new list and appending it 
const newUl = document.createElement("ul");
// create the items to be on the list
const newLi = document.createElement("li");
// add an item to the list
/*newLi.innerText = myFavePlayers[0];*/
// looping the list array
for(let i = 0;i<myFavePlayers.length;i++){
    const newLi = document.createElement("li");
    newLi.innerText = myFavePlayers[i];
    newUl.appendChild(newLi)

}
// add/append item to the list
/*newUl.appendChild(newLi)*/
// append list to the dom 
newEle.appendChild(newUl);
console.log(newEle);
console.log(newEle);
// append the element to the dom
createdDiv.appendChild(newEle);
// removing an element
// createdDiv.removeChild(newEle)
console.log(newUl.childNodes.length)
const deletePlayer = newUl.childNodes[4];
if(deletePlayer.innerText === "sancho"){
    
    newUl.removeChild(deletePlayer);
}
// const player = "Bruno"
for(prop of newUl.childNodes){
    if(prop.innerHTML === "Degea"/*player*/){
        newUl.removeChild(prop);
    }
}
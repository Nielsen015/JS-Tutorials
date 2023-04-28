/*
Events
- any event that takes place in the DOM
- can be user-generated or by an API
-Many types of events
- contains properties and methods
- add EventListener function takes in the event to listen for, a second argument to be called when the described event fires
- addEventlistener("click",function()){
    logic inside function
}
*/
// add a click event listener
/*document.addEventListener("click",function(){
    alert("You clicked a blank, LOL :)");
}); */

// add a click event listener using div
const click = document.getElementById("click");
click.addEventListener("click",function(event){
    // console.log(event.type);
});
const button = click.querySelector("button");
button.addEventListener("click",function(){
    alert("Hi There am a button")
});
function myFunction() {
    alert("Hello this is an old fashioned way");
}
let adder = 0;
button.addEventListener("focus",() =>{
    button.style.backgroundColor="black"
    adder +=1;
    console.log(adder);
    button.style.borderRadius="5px"
})
button.addEventListener("focusout",function(){
    button.style.backgroundColor="green"
    button.style.color = "white"
    adder -=1;
    console.log(adder);
})
// console.log(adder);

// eventHandle in a function
button.addEventListener("click",logEvent);
button.addEventListener("focus",logEvent);
button.addEventListener("focusout",logEvent);
function logEvent(e){
    console.log(e.type);
};
const myButt = document.getElementById("butts");
const butt = myButt.querySelector("button");
myButt.addEventListener("click",logger);
function logger(e){
    console.log(e.type);
    butt.innerHTML = "already Clicked"
    myButt.removeEventListener("click",logger)
}
// using Parent Node
const tester = document.getElementById("background");
const listItems = tester.querySelector("ul");
// const allLis = tester.querySelectorAll("li");
// tester.addEventListener("click",function(){
//     tester.classList.toggle("background");
// })
// tester.addEventListener("mousedown",testerFunc);
tester.addEventListener("click",testerFunc);
document.addEventListener("click",testerFunc);
/*document.addEventListener('click',greenFunc)*/
listItems.addEventListener("click",greenFunc)
// using toggle with class
//  function testerFunc (){
//     tester.classList.toggle("background");
//  } 
//  using add without class

function testerFunc (e){
    const hasBeenClicked = tester.contains(e.target);
    if(hasBeenClicked){
        tester.classList.add("background");

    }
    else{
        tester.classList.remove("background");
    }

}
// selects the individual items in the list
function greenFunc(e){
    e.stopPropagation();
    const targetLi = e.target;
    if(targetLi.nodeName !=="LI" /*==="UL"*/){
        return;
    }
    // selecting each list item 
    // for(prop of allLis){
    //     prop.classList.remove("green")
    // }
    // alternative method
    const greener = document.querySelector(".green");
    if(greener){
        greener.classList.remove("green")
    }
    targetLi.classList.add("green")
    // console.log(e.target.tagName)
}
// selects the whole list
// function greenFunc (){
//     for(prop of allLis){
//         prop.classList.remove("green")
//     }
//         listItems.classList.toggle("green");
//      } 

// using Child nodes
/*console.log(listItems.childNodes)
const tester2 = document.getElementById("background2");
const allLis = tester2.querySelectorAll("li");
console.log(allLis)
for(const prop of allLis){
    console.log(this)
} */

// defaults
// preventing a user click on a link...
const link = document.getElementById("link");
const tag = link.querySelector("a");
tag.addEventListener("click"/*right-click*/, function(e){
    e.preventDefault();
    alert("Web page under maintenance")
})

// adding a submitted value to the list...
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", addList);

function addList (e){
    e.preventDefault();
    const myInput = document.getElementById("myInput").value;
    const newLi = document.createElement('li');
    newLi.innerText = myInput;
    if(myInput !== "" ){
        listItems.appendChild(newLi);
        myForm.reset();
    }
    else{
        alert("can not add an empty list")
    }
    
}
document.addEventListener("keydown", function(e){
    // console.log(e.keyCode);
} );

// adding "typing when a user presses a key and remove it when no key is being pressed"
const div3 = document.getElementById("div3");
const para = div3.querySelector("p");
const textArea = div3.querySelector("textarea")
const paraText= "typing..."
let timer;
let count = 0;
textArea.addEventListener("keydown", addText);
textArea.addEventListener("keyup", removeText);

function addText (e){
    para.innerText = paraText;
}
 function removeText(e){
    clearTimeout(timer);
    timer = setTimeout(() =>{
        para.innerText = "";
    }, 1000)
 }

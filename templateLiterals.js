/*
string literals allowing embedded expressions
makes it easier to create multiline strings and allow string interpolation
enclosed in back-ticks (``)
can contain place holders
*/
 var myFirstName = "Moses";
 var myLastName = "Nielsen";
 var age = 25;

 console.log(`${myFirstName} ${myLastName} is ${age}`);

//  not a convenient way
 var myNewList = 
 " <ul>\n" +
    "<li>I am item 1</li>\n"+
    "<li>I am item 2</li>\n"+
    "<li>I am item 3</li>\n"+
    "</ul>"

 console.log(myNewList);
 var myList = "\
 <ul>\n\
 <li>I am item 1</li>\n\
 <li>I am item 2</li>\n\
 <li>I am item 3</li>\n\
 <li>I am item 4</li>\n\
 </ul>";

const myNewLine = `
<ul> 
<li>I am item #1</li>
<li>I am item #2</li>
<li>I am item #3</li>
<li>I am item #4</li>
`

//  const myDiv = document.getElementById("myDiv");
//  myDiv.innerHTML = `${myNewList} \n ${myList}`;

 const dateNow = new Date();
 console.log(`Today is ${dateNow}`);
//  mapping 
const myArray = [1,2,3,7,9];
myArray.map((num) => {
    console.log(num * 2)
});
const newArray = myArray.map((num) => num +5);
console.log(newArray)
console.log(`${myArray.map((num) => `${num + 3}`)}`);

const titles = ["Epl", "FA Cup", "EFL Cup", "Europa League"];
const manUtd = (
    `
    <article>
    <h2>Man Utd 2022/2023 Titles</h2>
    <ol type=1>
    ${titles.map((title) => `<li>${title}</li>`).join(" ")}
    </ol>
    </article>
    `
);

const utdTitles = document.getElementById("manUtdTitles");
utdTitles.innerHTML = manUtd;
 function templateParser(arrayString, exp1, exp2){
    console.log(`${arrayString}, ${exp1} is a ${exp2}`);
 };

 const person = "Moses Nielsen";
 const personAge = 25;
 const personProf = "software Engineer";

 const myTemplateLiteral = templateParser(person,personAge,personProf);
 console.log(myTemplateLiteral);
/*
Destructuring syntax can be used on the left-hand side of assignments
Is a Javascript expression that makes it possible to extract data from arrays or objects into distinct variables 
*/

const myArray = [1, 2, 3, 4, 5, 6];
const firstNum = myArray[0];
console.log(firstNum);

// destructured way
const [x, y, z] = myArray;
console.log(y);

const family = ["Isaac", "Josephine", "Patricia", "Nielsen", "Terah", "Zack", "Nigel"];

const familyName = (name) =>{
    let father, mother, daughter;
    [father, mother, daughter] = name;
    console.log(`${father} is the head of the family`);

}

familyName(family);

// swap variables
let aa = 100;
let bb = 250;
let cc = 500;
 
console.log(aa, bb , cc);

let temp = cc;
cc = bb;
bb = temp;
console.log(aa, bb, cc);
[aa, cc] = [bb, aa];
console.log(aa, bb, cc);

// use with functions

function showArray(){
    return["man utd", "man City", "Arsenal", "Tote"]
}

const [united, city, gunners, spurs] = showArray();
console.log(united);

function returnArray(arr, term){
    return arr.filter((t) => t === term);
};

const daughter = returnArray(family, "Patricia");

console.log(...daughter);
// can ignore some values
const numbers = [12, 34, 45, 599 , 800 , 89];

const [numA, , numB, , numC, numbD] = numbers;

console.log(`First: ${numA}, second: ${numB}, Third: ${numC}, Fourth: ${numbD}`);
// can use  rest pattern
function sayHi(firstArg, ...restArgs){
    console.log(`Hi ${firstArg}`);
    console.log(restArgs);
};

sayHi("Nielsen", 30, "Software Engineering");

const animals = ["Lion", "Zebra", "Cheetah", "Leopard", ]

const [king, prey, ...others] = animals

console.log(king);
console.log(prey);
console.log(others);

animals.unshift("Panther");
console.log(animals);
const [kings, preys, ...other] = animals
console.log(kings);

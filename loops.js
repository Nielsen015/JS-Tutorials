// a quick and easy way to do something repeatedly
// 1. while loop
let numberOfLoops = 0;
while(numberOfLoops <= 10){
    numberOfLoops +=2;
    // console.log("I am looping");
};
// breaking a loop
let num1 = 0;
let num2 = 0;
while(num1 < 100){
    num1 += 5;
    num2 += num1;
    if(num1 === 50){
        break
    }
}
console.log(num2);
// initializing a function inside a loop
let num3 = 0;
let num4 = 0;
while(num3 < 20){
    num3 +=2;
    loopDeLoop();

}
function loopDeLoop(){
    // console.log("this is a loop!!");
} 
// indexes
const names = ["Nielsen", "Moses", "Joy", "Maria"];
let index = 0;
while (index < names.length){
    if (names[index] === "Joy"){
        console.log(names[index]);
        break;
    }
    index +=1;
}
console.log(index);

// embedding into function
const nameLooper = (arr,username) => {
    index = 0;
    while(index < arr.length){
        if (arr[index] === username){
            console.log(arr[index])
            break
        }
        index +=1;
    }
}
nameLooper(names,"Maria")

// do...while loop - execute at least once
/*
do {
    statement
}while(condition)
*/
let trial;
do{
    console.log("looping");
    trial;
}while(trial);

let shouldRunOnlyOnce = true;
let indexN = 0;
do{
    console.log("loop");
    indexN += 2;
    if(indexN === 10){
        shouldRunOnlyOnce = false;
    }
} while(shouldRunOnlyOnce);

// user
let condition; /*condition = false*/
do {
    const userInput = "q";
    if (userInput === "q"){
        console.log("Goodbye");
        condition; /*condition = false */
    }
    else{
        condition = true;
    }
} while(condition);
//  using a function
let balance = 2000;
do {
    purchasePower()
} while(balance > 4000);

function purchasePower(){
    if (balance > 4000){
        console.log("can purchase :)");
    }
    else{
        console.log("sorry, low balance :(");
    };
}
// for loops - repeats until a specified condition evaluates to false
/*
for(initial expression;condition; increment expression){
    statement
}
*/
let indice = 0;
for(indice;indice<10;indice += 2){
    console.log(indice);
}
const iceCream = ["vanilla","Chocolate","StrawBerry","Cocktail"];

for(let items=0; items < iceCream.length; items+=2){
    console.log(iceCream[items]);
}

// inside a function
const iceList = (arr) =>{
    for(let item =0;item<arr.length;item+=1){
        console.table(arr[item]);
    }
}
iceList(iceCream);
for(let number = 1;number<=100;number+=1){
    if(number%3===0 && number%5===0){
        console.log("fizzBuzz");
    }
    else if(number%3===0){
        console.log("fizz");
    }
    else if(number%5===0){
        console.log("Buzz");

    }
    else{
        console.log(number)
    };
};
// continue function skips a certain statement

for(let number = 1;number<=100;number+=1){
    if(number%3===0 && number%5===0){
        continue;
    }
    else if(number%3===0){
        continue
    }
    else if(number%5===0){
        continue

    }
    else{
        console.log(number)
    };
};
// inner loops
// for(let i = 0;i<4;i+=1){
//     console.log("loop #" + i);
//     for(let a = 0; a<3;a+=1){
//         console.log("Inner loop #" + a)
//     }
// }
outerLoop:
for(let i = 0;i<5;i+=1){
    console.log("loop #" + i);
    for(let a = 0; a<3;a+=1){
        console.log("Inner loop #" + a);
        if(a===2){
            break outerLoop;
        }
    }
}
// timer function
// const timer = (value) =>{
//     setTimeout(function(){
//         console.log(value);
//     },value*1000);
// }
// for(let sec = 0;sec < 10;sec+=1){
//     timer(sec);
// }

// alternative
// for(let i = 0; i<10;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }
// for(let i = 0;i<10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }
// For In, For Each, For Of Loops
/*
looping through an object's properties in an arbitrary order

 */
const users= {
    1:"Nielsen",
    2:"maria",
    3:"nats",
    4:"Junior"
}
for(item in users){
    if(users[item]==="Nielsen"){
        console.log(`${users[item]} is at index ${item}`)
    }

}
// functional operation
const usersFunction = (obj,userName) =>{
    for(namer in obj){
        if(obj[namer] === userName){
            console.log(`${obj[namer]} is at position ${namer}`);
        }
    }
}
usersFunction(users,"junior");
usersFunction(users,"Junior");
/* 
For Each loop
calls a function for each element in an array
*/
let sum =0;
const numbers = [12,34,56,78];
let sums =0

numbers.forEach((d) =>{
    sum +=d;
})
console.log(sum);
// functional operation
const sumFunction = (item) =>{
    item.forEach((i) =>{
        sums += i
        
    })
    console.log(sums)
};
sumFunction(numbers);
/* 
For Of Loop 
used to loop over an iterable object(array, strings,maps,sets)
*/
const letterUpper = text =>{
    let capitalized = "";
    for(letter of text){
        
        capitalized += letter.toUpperCase()
    }
    console.log(`Your CAPITALIZED Text is: ${capitalized}`)
}
letterUpper("lion");
// number multiplier
const numberArray = [12,34,56,67,70];
const numberIncrease = (arr,inc) =>{
    for(let num of arr){
        num *=inc;
        console.log(num);
    }
}
numberIncrease(numbers,5);
// set
// is a collection of items that are unique
// new Set([it])
const clients = ["Moses","Isaac", "Mary", "Nielsen", "Moses", "Mary"];
const unique = new Set(clients);
console.log(unique)
for(const n of unique){
    console.log(n)
};
for(const n of clients){
    console.log(n)
};

// functions
function greet(name){
    console.log(`Hello ${name}`); 
}
let user = 'Nielsen';

// invoking te function
greet('John'); 

// addition function

function addition(num1,num2){
    return num1+num2;
}

let numberOne = addition(3,4);
let numberTwo = addition(7,9);
function multiplier(first,second){
    return first*second;
}
console.log(addition(15,10));
console.log(multiplier(numberOne,numberTwo));
// declaring functions using variables
let square = function (num){
    return num*num;
}
const add = function(numF,numS){
    return numF + numS;
}

const answer = square(2);
const answer1 = square(3);
const answer3 = add(answer,answer1);
console.log(answer3);
// calling a function within a function
console.log(add(square(4),square(3)));

const squared = function(num){
    return num *num;
}
const numAdder = function(squarer,num2){
    const squared  = squarer(4);
    return squared + num2;
}
console.log(numAdder(squared,10))
console.log(squared(3));
// how functions can change value of a variable
const myInfo = {
    name: "Nielsen",
    age: 24
}
function changeAge(myObj){
    myObj.age +=2;
}
console.log(myInfo);
changeAge(myInfo);
console.log(myInfo);

// Nested Functions
//  example 1
function additionMultiply(num1,num2){
    function addition(num1,num2){
        return num1+num2;
    }
    return addition(num1,num2)* addition(num1,num2);
}

console.log(additionMultiply(3,5));
// you can not call a function nested within another function
// nested functions are scope defined i.e items can not be accessed outside the function scope.
function personalInfo(fName,LName,age){
    function nameFormat(arg1,arg2){
        return `${arg1} ${arg2}`
    }
    return `${nameFormat(fName, LName)} is ${age} year(s) old`;
}
console.log(personalInfo('Moses', 'Nielsen', 25));
// Object in nested function example 
function personInfo(fName,Lname,age){
    function nameAdd(arg1,arg2){
        return arg1 + " " + arg2;
    }
    function objData(fullName,age){
        const person = {
            name: fullName,
            age: age
        }
        return person;
    }
    return objData(nameAdd(fName,Lname),age)
}
console.log(personInfo('Nielsen','Moses',24));
// Advanced Functions
const multiply = (num1,num2) => {
    return num1*num2;
};
console.log(multiply(4,5));
// mapping(iteration)
const users = [
    {name:'moses',age:24},
    {name:'nielsen', age:25},
    {name:'alukwe', age:36}
];
const clubs = [
    {name:'Man United', rank:1},
    {name:'Man city', rank:2},
    {name:'Arsenal', rank:3}
];
const userName = users.map( (user) =>{
    return user.name;
})
// console.table used to display tabular information
console.table(userName);
// end of mapping
// a function for mapping
const mapUser = (myArray) =>{
    const userName = myArray.map( (user) =>{
        return user.name;
    })
    return userName
}
console.log(mapUser(users));
// skip bracket when one expression is expected example
const multiplies = (num1,num2) => num1*num2;
console.log(multiplies(4,5));
// skip bracket
const mapUsers = (myArray) => 
myArray.map( (user) => user.name);

console.log(mapUsers(clubs));
const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbersFiltered = numbers.filter((num) => num % 2 !=0);
console.log(numbersFiltered);
// updating a list with a doubled numbers using a function
const doubleNumbers = (num) => {
    const numberContainer = [];
    num.forEach((n) => {
        const doubled = n*2;
        numberContainer.push(doubled);
        
    });
    return numberContainer
}
console.log(doubleNumbers(numbers));

// assigning default values 
const numbMultiplier = (num1, numb2) => {
    num1 = num1 || 5;
    numb2 = numb2 || 15;
    
    return num1 * numb2;
}
console.log(numbMultiplier());
console.log(numbMultiplier(4,5));

// assign 2
const numberMulti = (num1 = 12, num2 = 6) => num1 * num2;
console.log(numberMulti());

// splitting strings - returns an array with the slipt words
function stringSplitter(str){
    return str.split(",");

}
console.log(stringSplitter("hello,My name is Moses."));
// alternative
const textSlipt = (str) => str.split(" ");
console.log(textSlipt("hello Moses"));
// purchasing
const bankAccount = {
    canSpend : true,
    hasCredit: true,
    balance: 2700
};
function purchase(price,account = bankAccount){
    if(account.canSpend){
        if(account.hasCredit){
            if(account.balance >= price){
                account.balance -= price;
                if(account.balance <= 0){
                    account.canSpend = false;
                }
                
            }
            else{
                return false
            }
            return true

        }
       
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
console.log(purchase(27000));
console.log(bankAccount);
console.log(purchase(2000));
console.log(bankAccount);
console.log(purchase(700));
console.log(bankAccount);
console.log(purchase(700));

// undefined parameters 
function logAllArguments(x,y,z) {
    console.log(arguments);
}
logAllArguments(1,2,3);

// slicing extra arguments in parameter
function logArguments(x){
    const args = Array.prototype.slice.call(arguments,logArguments.length);
    console.log(args.sort());
}
logArguments(5,4,7,8,9);
// alternative ES6 version
function logArgs(x,...num){
    console.log(num.sort());
}
logArgs(10,13,67,8,90);
// alternative
const logArg = (x,...num) => console.log(num.sort());
logArg(2,3,5,67,8);

// mapping undefined
const multi = (num,...answer) => answer.map((n) => num * n);
console.log(multi(6, 10,12,23,45));
// object instantiation using constructor
function Dog(color,breed,age=5){
    const that= this;
    that.color = color;
    that.breed = breed;
    that.age = age;
}
function Cat(color,age){
    this.color = color;
    this.age = age;
    // setInterval syntax setInterval(function (){code},interval time, e.g 1200(1.2 seconds)); or SetInterval(() => {code},interval)
    // setInterval(() => {
    //     this.age += 1;
    //     console.log(this)
    // },5000)
}

const bosco = new Dog('black', 'German Shephard', 3);
const paloma = new Cat('white', 4);
console.log(bosco);
console.log(paloma);

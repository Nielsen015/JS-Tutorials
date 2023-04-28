// number = prompt('Enter a number:');
// converting text to integer
// total = parseInt(number) + 12;
// console.log(total);
console.log(isNaN('hello'));
console.log(isNaN('45'));
console.log('Nielsen'.length);
console.log('ABCD'.toLowerCase());
console.log('i want want to be uppercase!!!'.toUpperCase());
console.log('New tech'.charAt(2));
console.log('my'+' '+'Name'+' '+'is'+" "+'Nielsen');
//  Boolean 
let approved = true;
let check = null;
if (check ==true){
    console.log('Your loan application has been approved')
}
else{
    console.log('Loan application declined!')
}
let content = 'has content';
let noContent ='';
let noAssignedVariable;
let isFalse = false;
let isNotANumber = isNaN(content);
// console.log(Boolean(content));
// console.log(Boolean(noContent));
if (isNotANumber){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
if (noContent){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
if (noAssignedVariable){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
if (isFalse){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
// let person = {
//     name: 'Nielsen',
//     age:23,
//     height:`5' 6"`,
//     male: true,
// };
// console.log(person.height);
let myPerson = new Object();
myPerson ['name']= 'Moses';
myPerson ['age']= 24;
console.log(myPerson);
// Constructor pattern for creating objects
function PersonConstructor(name,age,height,male){
    this.name=name;
    this.age=age;
    this.height=height;
    this.male=male;
    this.showMessage = function(){
        console.log(`Hello ${this.name}`);

    };
};
let profile = new PersonConstructor('Nielsen',24,`5' 6"`,true);
console.log(profile);
profile.showMessage();
let person = new PersonConstructor('Maria', 20, `5' 5"`,false);
// arrays
let clubs = ['Man United', 'Arsenal', 'Man city'];
console.log(clubs.length);
let arrange = clubs.sort()
console.log(arrange);
let revert = clubs.reverse();
console.log(revert);
// adding objects inside an array.
let couple = [person,profile];
console.log(couple[0]);
let single = couple[0];
// accessing a function inside an object created in the array.
single.showMessage();
let coupleLength = couple.length;
console.log(coupleLength);
let clubsLength = clubs.length;
let clubsSliced = clubs.slice(clubsLength-1);
console.log(clubsSliced);
console.log(clubsLength);
console.log(clubs);
// Variables and constants
let name = "Moses Nielsen";
function greet(names){
    console.log(`Hello ${names} welcome onboard`)
}
greet(name);
let count = 10;
let increase = 2;
function counter(){
    count +=increase;
    console.log(count);
}
counter();
 function age(){
    let boy = true
    if (boy){
        console.log("This is a boy")
        boy = false
    }
    else{
    console.log("This is a boy is not true")
    boy = true
    }
 }
 age();
//  reassigning arrays
  let myArray = [1, 2, 3, 4];
  myArray = [4, 5, 6, 7];
  console.log(myArray);
//   if statements and operators
const sayHi = true;
if (sayHi){
    console.log("Hello")
}
const bankBalance = 1200;
const cost =  1000;
const tax = 300;
if(bankBalance>= (cost+tax)){
    console.log("generating receipt")
}
else{
    console.log("Low Balance, please recharge")
}
// logical operators
// && - AND || - OR ! - NOT
const balance = 1000;
const pay = 500;
const spend = true;

if (balance >= pay && spend){
    console.log("ready for payment!!!")
}

// using AND, OR together
const account = 12000;
const item = 13000;
const credit = true;
const creditLimit = 500;
if(account >= item || credit && (creditLimit >= item-account)){
    console.log("Approved");
}
else{
    console.log("low amount of money");
}
// Functions
const personal = {
    name: "nielsen",
    age: 24,
    city: "nairobi"
}
console.log(personal)
for(let key in personal){
    console.log(`${key}: ${personal[key]}`);
    
};
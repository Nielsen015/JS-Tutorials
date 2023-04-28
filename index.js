// let name = 'Moses';
// declaring an object
let person = {
    name:'Nielsen',
    age:23,
    spouse:'Maria',
    address:{
        city:'Nairobi',
        po_Box: '3764_citySquare',
        postal_code:0200
    }
};
console.log(person);
// dot notation
person.name = 'Moses';
console.log(person.name);
// bracket notation
person['age'] = 25;
console.log(person.age);
// arrays
let clubs = ['Man united','Arsenal','Man city','Newcastle'];
// access an item
console.log(clubs);
// length
console.log(clubs.length);
// add items
clubs = [...clubs,'tote','Liverpool','chelsea'];
// add item
clubs[7]='Brent'
console.log(clubs.length);
console.log(clubs);
// display a single item
console.log(clubs[0]);
// functions
// perform a task
function greet(name){
    console.log(`Hello ${name}`);
}
let user = prompt('What is your name: ')
greet(user);
// calculate a value
function square(number){
    return number*number;
}
let num=square(2);
console.log(num)
// or
console.log(square(4));


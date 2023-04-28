// destructuring Objects
const personName = "Moses  Nielsen";
const personAge = 25;
const personJob = "Software Engineer";
const person = {
    name: personName,
    age: personAge,
    job: personJob
}


console.log(person);
const firstName = person.name;
console.log(firstName);

// destructured way
// variables should be exactly same as the ones in the object
const {name, age, job} = person

console.log(job);

// assigning to undefined variables
let myVar1, myVar2;

const myObj = {myVar1: "A", myVar2: "B"};
// use brackets to assign '()'
({myVar1, myVar2} = myObj);

console.log(myVar1, myVar2);
// assigning new variable names
const clubs = { 1: "united", 2:"city", 3:"gunners", 4:"tote"};
const { 1:manUnited, 2:manCity, 3:arsenal, 4:spurs } = clubs;
console.log(`${manUnited} will win the Title this 2022/2023 season`);
console.log(`The noise ${arsenal} will finish Third`)

const myObj4 = {uuid: 123455, username:"Nielsen", logged: new Date()}
const {uuid: userID, username: user, logged: date} = myObj4
console.log(date)

console.log(`${user} last logged in at ${date.toLocaleString()}`);

// assigning default values

const numbers = {a1: 10, b1: 12, c1: 15, d1: 16};

const {a1, b1, c1, d1, e1 = 50} = numbers;
console.log(e1);

// In function

const stateUser = ({user=null, memberType}) =>{
    console.log(`Username: ${user} membership: ${memberType}`)
}
stateUser({memberType: "Platinum"})

function stateUsers(obj){
    const {user = null, memberType} = obj;
    if(!user){
        console.log("Error! No username found.");
        return
    }
    else{
    console.log(`Username: ${user} membership: ${memberType}`)
    }
}

stateUsers ({memberType:"standard"});
const member1 = {user: "Moses", memberType: "Golden"}
stateUser(member1)

function sayIfValid({prop: s, a1:q}){
    console.log(`pick: ${s} opposite: ${q}`);
}

const valid = {prop: "I am valid", a1: "I am not valid"}

sayIfValid(valid)

// object constructor

function objCon({prop, a1}){
    const internalObj = {
        prop, 
        a1,
        constructed: true
    }
    return internalObj
}

console.log(objCon(valid))

// Nested data
const myObj5 = {
    title: "Lake of Redemption",
    entries: [
        {
            author: "Nielsen",
            number: 23447744,
            publisher: "Molbs Tech"

        },
        {
            author: "Simon",
            number: 35525774523,
            publisher: "new Light"
        },
        {
            author: "Bill",
            number: 35525776487,
            publisher: "new Light"
        },
        {
            author: "Ken",
            number: 3552577345532,
            publisher: "new Light"
        }
    ],
    stock: "1M"
}
const {title, entries} = myObj5

// destructing objects in an array
console.log(entries);
const details = (entries) => {
    for( const {author, number} of entries){
    console.log(`Name: ${author}, ID Number: ${number}`);
}
}

details(entries)
console.log({details: entries[0].number});
const{entries: [{author}]} = myObj5
console.log(author);



const myObj6 = {
    myProp1: "Yoo",
    myProp2: [15, 10]
}

const {myProp1, myProp2: [aa, bb]} = myObj6

console.log(aa, bb);
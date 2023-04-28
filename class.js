/* - Classes in ES6 are just syntactical sugar over javascript's existing prototype-based inheritance
   - Simple, clean syntax to create objects and take care of inheritance
   - Pre-ES6 way:
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function (){
        console.log(`Greetings ${this.name} :D`);
    }
    function Employee(name, age, role){
        Person.call(this, name, age);
        this.role = role
    }
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    const bill = new Employee("Nielsen", 25, "Developer")

    bill.greeting();
*/


// class Method - classes are not hoisted...you can not invoke a class before defining it.
// const Person = class {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const bob = new Person("Moses", 24)
// console.log(bob.name);
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     // no need to add the method to the prototype, classes automatically do that
//     greetings() {
//         console.log(`Hello ${this.name}`);
//     }
//     greetTest(){
//         return 'My class is Person'
//     }
//     static sayHey(){
//         console.log("Hello!");
//     }
// }
// // reassigning a method or changing a method

// Person.prototype.greetings = function (){
//     console.log("I am changed");
// }
// const bob = new Person("Moses", 24)
// console.log(bob.name);
// bob.greetings();

// // Class Inheritance
// // super keyword calls functions on an object's parent class
// class Employee extends Person{
//     constructor(name,age, position){
//         super(name, age);
//         this.position = position;
//     }
//     testGreetings(){
//         super.greetings();
//     }
//     sayGreet(){
//         const parentString = super.greetTest();
//         console.log(`${this.name} thinks ${parentString}`);
//     }
// }
// const barb = new Employee("Barb", 25, "developer");

// console.log(barb);
// barb.testGreetings();
// barb.greetings();
// barb.sayGreet();

// class Customer extends Person{
//     constructor({name = "Customer", age = "n/a", contactMethod}){
//         super(name, age);
//         this. contactMethod =  contactMethod;
//         this.accountCredit =  null;
//     }
//     addCredit(amount){
//         this.accountCredit += amount;
//     }
//     reduceCredit(amount){
//         this.accountCredit -= amount;
//     }
//     // static method can only be called on the class itself and not on the instantiated object
//     static sayHi(){
//         console.log("Hi! :D");
//     }
//     static sayCustomerNames(c1, c2){
//         console.log(`${c1.name}, ${c2.name}`);
//     }
//     // spreads the instances
//     static sayCustomerName(...customers){
//         return customers
//     }
//     static sayCustomer(...customers){
//         for( const c of customers){
//             console.log(c.name);
//         }
//     }
//     static transferCredit(c1, c2, amt){
//         const amount = amt;
//         if(c1.accountCredit < amt){
//             console.log("Not enough credit to complete transfer!!");
//         }
//         else{
//         c2.accountCredit += amount;
//         c1.accountCredit -= amount;
//         }
//     }


// }

// const customer1 =  new Customer({name: "Moses Nielsen", contactMethod:"Email"});
// const customer2 =new Customer({name: "Mary Oramisi", contactMethod: "mobile"});
// const customer3 =new Customer({name: "Nats Nielsen", contactMethod: "icloud"})
// console.log(customer1);
// customer1.addCredit(100);
// console.log(customer1.accountCredit);
// customer1.reduceCredit(30);
// console.log(customer1.accountCredit);
// console.log(customer2.accountCredit);
// Customer.sayHi();
// // inherited from class Person
// Customer.sayCustomerNames(customer1,customer2);
// console.log(Customer.sayCustomerName(customer1, customer2, customer3));
// Customer.sayCustomer(customer1,customer2, customer3);
// customer2.addCredit(20);
// console.log(customer1.accountCredit);
// Customer.transferCredit(customer1, customer2, 20)
// console.log(customer2.accountCredit);
// console.log(customer1.accountCredit);
class Family{
    constructor(lastName){
        this.name = lastName;
    }
    sayName(){
        console.log(`We are The ${this.name}s`);
    }
}

class Parent extends Family{
    constructor(name, firstName){
    super(name);
    this.firstName = firstName;
}
}

class Child extends Family{
    constructor(lastName, firstName){
        super(lastName);
        this.firstName = firstName
    }
}

const dad = new Parent("Nielsen", "Moses");
const mom = new Parent("Nielsen", "Maria");
const nats = new Child("Nielsen", "Nats")
dad.sayName();
// console.log(dad);

class FamilyMember{
    constructor(lastName, firstName, relationship){
    this.lastName = lastName;
    this.firstName = firstName;
    this.relationship = relationship;
    }
    sayFamilyName(){
        // console.log(`We are the ${this.lastName}s`);
    }
}

const daddy = new FamilyMember("Nielsen", "Moses", "father")
const mommy = new FamilyMember("Nielsen", "Maria", "mother")
const austin = new FamilyMember("Nielsen", "Austin", "son")
const nat = new FamilyMember("Nielsen", "Nats", "daughter")
// var array = [4, 3, 2, 1, 0];
// for (e in array) {
// console.log(e);
// } 
// austin.sayFamilyName();

class FamilyGroup{
    constructor(parents = [], children = []){
        this.parents = parents;
        this.children = children;
    }
    addMember(member){
        this.children.push(member);
    }
}
const alukwes = new FamilyGroup([daddy, mommy]);
// console.log(alukwes);
alukwes.addMember(austin);
alukwes.addMember(nat);
// console.log(alukwes);
// console.log("family starts here");
const alukweFamily = {
    1: ["Nielsen", "Moses", "Father"],
    2: ["Nielsen", "Maria", "Mother"],
    3: ["Nielsen", "Austin", "Son"],
    4: ["Nielsen", "Nats", "Daughter"],
}
const MuiaFam = {
    1: ["Muia", "George", "Father"],
    2: ["Muia", "Magret", "Mother"],
    3: ["Muia", "kent", "son"],
}
// a one function do the calling
const createFamilyGroup = (famArray) =>{
    const famGroup = new FamilyGroup();
    for (const prop of famArray) {
        if(prop.relationship === "Father" || prop.relationship === "Mother"){
            famGroup.parents.push(prop);
        }
        else{
            famGroup.children.push(prop);
        }
    }
    return famGroup
}


const createFamilyMembers = (famObj) => {
    const newFamGroup = new FamilyGroup();
    // const allMember = [];
    for (const member in famObj) {
        const [last, first, relationship] = famObj[member];
        const newMember = new FamilyMember(last, first, relationship);
        // allMember.push(newMember);
        // const famGroup = createFamilyGroup(allMember);
        // return famGroup;
        if (relationship === "father" || relationship === "mother") {
            newFamGroup.parents.push(newMember);
          } else {
            newFamGroup.children.push(newMember);
          }
        
        return newFamGroup;
        
    }
}
const theAlukwes = createFamilyMembers(alukweFamily);
const theMuia = createFamilyMembers(MuiaFam);
console.log(theMuia);

// Object-oriented javascript
/*
- OOp: basic is that you use objects to represent real world things. Objects have own properties and functions(methods)
Objects can contain data and other code to represent info about what you're trying to model
- data/methods inside the object is encapsulated (can not be accessed outside)
- In classic OOP, class is defined, then, when an instance of that class is created, all the properties and methods are copied.
- JS is dynamic and does not provide a traditional class implementation per se.
- Js inheritance is prototype based.
- each object has a private property called the prototype.
- The prototype can have a prototype of its own. 
- Nearly all objects in javaScript are instances of Object which sits on top of the prototype chain.
- the prototype property's value is an object
-It's like a bucket to store properties and methods
- Prototype as a template and can have prototype properties of its own
- the prototype property is where inherited members are defined
- 
*/
// example
/* function Ship(){
    this.float = true;
    this.material = "steel"
}


const myShip = new Ship();
console.log(myShip.material);*/

const myObj = {
    a:1,
    b:2
}

myObj.nationality = "kenya"

console.log(myObj);
/* Does myObj have a method called valueOf()?
- No
- Does the Object have a method called valueOf()?
- yes*/
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
  
  var person1 = new Person("Alice", 25);
  person1.greet(); // logs "Hello, my name is Alice and I am 25 years old."
  
  var person2 = new Person("Bob", 30);
  person2.greet(); // logs "Hello, my name is Bob and I am 30 years old."
  console.log(Object.keys(myObj));
  console.log(myObj.hasOwnProperty('nationality')); 
  
  const myArray = ["Man utd", "Man City", "Arsenal", "Newcastle"]

  myArray.push("Tote");
  console.log(myArray);
  console.log(Array.prototype);

  const person = {
    name: "Nielsen",
    age: 25,
    state: "Nairobi",
    sayName: function (){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
  }

//   make a copy of person object:
const person3 = Object.create(person);
person3.name = "Moses", person3.age = 24;
person3.sayName();
const person4 = Object.create(person3);
console.log(person4.hasOwnProperty('name'));
console.log(person.hasOwnProperty('name'));

// object constructors

// function Animals(name, age, breed){
//   const obj ={};
//   obj.name = name;
//   obj.age = age;
//   obj.breed = breed;
//   return obj;
// }
// console.log(Animals("Jack", 5, "German Shephard"));
function Animal(name, age, breed){
  this.name = name;
  this.age = age;
  this.breed = breed;
  // this.sayBreed= function(){
  //   console.log(`${this.name}'s is ${this.breed}`);
  // }
}
Animal.prototype.sayBreed = function(){
  console.log(`${this.name}'s is ${this.breed}`);
}
const dog1 = new Animal("Simba", 4, "German Shephard");
/* dog1 inherits from prototype Animal, which inherits from prototype Object*/
const dog2 = new Animal("Spark", 3, "Labrador");
console.log(dog1.name);
dog1.sayBreed();
console.log(Animal.prototype);
// Object inheritance

/* Inherits from Object Animal */
function Pet(name, age, breed){
  Animal.call(this, name, age)
  this.breed = breed
}
Animal.prototype.makeNoise= function(){
  console.log(`generic animal sound`);
}
// clone Animal prototype method
Pet.prototype = Object.create(Animal.prototype);
// instantiate Pet.prototype constructor to Pet Object
Pet.prototype.constructor = Pet
console.log(Pet.prototype);
const barky = new Pet("barky", 2, "Chihuahua");
console.log(barky.name);
barky.makeNoise();
barky.sayBreed();

function Cat (name, age, coloration){
  Pet.call(this,name, age);
    this.color = coloration;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scratchPost =  function (){
  console.log("Cat has scratched the Post")
}

const kitty = new Cat("Kitty", 2, "tabby");
kitty.makeNoise();
kitty.scratchPost();

// console.log(Cat instanceof Pet);

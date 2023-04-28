/* exception handling
- throw your own exception
- you specify the expression containing the value to be thrown e.g. : throw expression
- CAN THROW ANY EXPRESSION
*/

const myNum = 15;
const num = 6;
const CheckIfNum = (n) => {
    if(isNaN(n)){
        // throw "Error! Not a number"
    }
    else{
        console.log(n);
    }
}
 CheckIfNum(myNum)
 CheckIfNum(num)
function MyException(message){
    this.message = message;
    this.name = "My exception";
    this.toString = function(){
        return `${this.name}: ${this.message}`
    }
}
// throw new MyException("field Invalid")

// try...catch - enable the program  to continue without terminating
const myObj = [1, 2];
try{
   
    myObj.map((obj) => console.log(obj));
}
catch(id){  
    console.log("System Error");
    errorhandler(id)
}
console.log(myObj)

const myNum2 =  "hi";

const checkNum = (number) => {
    if(isNaN(number)){
        throw "This is Not a Number"
    }
    else{
        console.log(`It ${!isNaN(number)} ${number} is a number`);
    }
}

const myError = []

function errorhandler(e){
    myError.push(e);
}

try{
    
    checkNum(1)
    checkNum(myNum2)
    
}
catch(id){
    console.log("Oops, Caught an Error!", id);
    errorhandler(id)

}

console.log(myError)
/*using try...catch in an object constructor*/

// this get the value
function MyString (string){
    if(typeof string === "string"){
        this.value = string;
        this.getValue = function() {
            return `Your string: ${this.value}`;
        }
    }
    else{
        throw new StringException(string)
    }
}

// throw an exception incase the value is not a string
function StringException(value){
    this.value = value;
    this.message = "Must be a string"
    this.toString = function (){
        return `${this.value}: ${this.message}`
    }
}

function verifyString(s){
    let string;
    try{
         string = new MyString(s);
    }
    catch(e){
        if(e instanceof StringException){
            console.log("String Exception", e);
        }
        else{
            // console.log("Other Exceptions");
            throw "error unknown "
        }
    } 
    // finally{
    //     console.log("always runs");
    // }  
    return string;
}
const c = verifyString(true)
const a = verifyString("Hello")
// console.log(a.getValue());
const b = verifyString(1)
const d = verifyString("142455354")


// finally
// try...catch...finally

function finallyExample (){
    try{
        console.log("Hi");
        throw "test"
    }
    catch(e){
        console.log(e);
        return true
    }
    finally{
        console.log("Can I run?");
    }
}

console.log(finallyExample());
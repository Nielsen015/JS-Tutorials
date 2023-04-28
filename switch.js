// Switch statements
/*
switch(expression){
    case value1:
        statement to be executed when results of expression matches value1
        break
    case value2:
        ....
        break
    default:
        ....
        break
}

*/
const myFruit = "Lemons";
switch(myFruit){
    case "Apple":
        console.log("I really love Apples :D");
        break;
    
    case "banana":
        console.log("That's a good choice");
        break;

    case "Lemons":
        console.log("Ahh, Okay!");
        break;

    default:
        console.log("Sorry, i do not understand your request!");
}

const numChecker = num => {
    let value;
    switch(num){
        case 0:
        case 2:
        case 4:
            value = 'low range';
            break;

        case 1:
        case 2:
        case 3:
            value = 'High  range';
            break
        default:
            console.log('input an number between 0 and 4');
            return
    }
    setVolume(value);
function setVolume(num){
    console.log(`Volume set at ${num}`);
}
}

numChecker(1);
// switch within an outside function

const cars = brand => {
    switch(brand){
        case "s":
            return "Subabru";
        case "b":
            return "BMW";
        case "m":
            return "Mercidiz Benz";
        case "mz":
            return "Mazda"

        default:
            return null;
    }
}
const message = pick =>{
    const pickedCar = cars(pick);
    if (pickedCar){
    console.log(`Congratulations you just won a ${pickedCar}!`);
    }
    else{
        console.log("please choose between 's', 'b', 'm' and 'mz' !")
    }
}
message("h");
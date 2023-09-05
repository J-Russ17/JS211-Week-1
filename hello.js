console.log("Hello World!")

let num = 17
let convertNum = num.toString()
console.log(convertNum)

let string = "38"
let convertString = parseInt(string)
console.log(convertString)

let dataType1 = true;
let dataType2 = null;
let dataType3;
let dataType4 = 26;
let dataType5 = NaN;
let dataType6 = "Hi";

const dataFunction = () => {
    console.log(typeof dataType1)
    console.log(typeof dataType2)
    console.log(typeof dataType3)
    console.log(typeof dataType4)
    console.log(typeof dataType5)
    console.log(typeof dataType6)
}

dataFunction()

let num1 = 1000
let num2 = 337
let result = num1 + num2
console.log(result) 

let thing1 = true
let thing2 = true

    if(thing1 && thing2) {
        console.log("Both are true")
    }

    else {
        console.log("Not all are true")
    }
    
let thing3 = true
let thing4 = false
    
    if(thing3) {
        console.log("One thing is true")
    }
    
    else {
        console.log("Not all are true")
    }
        
let thing5 = false
let thing6 = false
        
    if(!thing5 && thing6) {
        console.log("One thing is true")
    }
        
    else {
        console.log("Not all are true")
    }
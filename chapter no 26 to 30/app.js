// question no 01
let num = prompt("write a positive integer number")
console.log("number",num)

console.log("round off value" ,Math.round(num) );


console.log("floor value",Math.floor(num));


console.log("ceil  value",Math.ceil(num));

// question no 02

let nums = prompt("write a negative floating point")
console.log("round off value",Math.round(nums));


console.log("floor value",Math.floor(nums));


console.log("ceil  value",Math.ceil(nums));

// question no 03

let user = prompt("write a absolute value");


let absval = Math.abs(user)

console.log("The absolute value",user, "is", absval);

// question no 4

let dice = Math.floor(Math.random()*6)+1;
console.log("random dice value is",dice) 

// question no 05
let random = Math.random();
let result;

if (random < 0.5) {
    result = "Head";
} else {
    result = "Tail";
}
console.log(result)
//question no 06



let ranNum = Math.floor(Math.random()*200)+1;
console.log("random number between 1 and 200",ranNum)

//question no 7

let weight = prompt("Enter your weight in kilogram")
console.log("The weight of user is",parseFloat(weight),"kilograms")
//question no 8
let secret = prompt("Enter a number between 1 to 10")
let secretNum = 2;
if(secret == secretNum  ){
    console.log("congratulation user")
}else{
    console.log("tryagain")   
}

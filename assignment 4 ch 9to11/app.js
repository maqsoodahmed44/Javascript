// chapter no 9 to 12

// question no 1
let usercity = prompt("Enter a city name:");

if(usercity == "karachi" || usercity == "karachi"){
    console.log("welcome to city of lights");

}else {
    console.log("you are not eligible")
}

// // question no 2
let gender = prompt("Enter Your Gender");
if(gender == "male"){
    console.log("Good Morning Sir.")
}else if(gender == "female"){
    console.log("Good Morning Ma'am.")
}else{
    console.log("enter gender name")
}

//question no 3

let signalcolor = prompt("Enter the color of the traffic signal");
if(signalcolor == "red"){
    console.log("Must Stop");
}else if(signalcolor == "yellow"){
    console.log("Ready to move");
}else if(signalcolor == "green"){
    console.log("Move Now");
}else{
    console.log("Invalid traffic signal color entered");
 }

//question no 04

let fuel = prompt("Enter the remaining fuel in your car")
if(isNaN(fuel) ){
    console.log("Invalid input. Please enter a numerical value for fuel.")

}else if (fuel<5){
    console.log("please refill the fuel in your car")

}else{
    console.log(`Your current fuel is ${fuel} litres. You are good to go!`)
}
//question no 05


 let a  = prompt(4);
if (++a === 5){
console.log("variable a is true");
}

//  let b = 82;
// if (b++ === 83){
// console.log(" variable b is true");
// }

//question no 05 d

let materialcost = prompt("enter your building cost");
 let labourcost = ""
let total = materialcost + labourcost;
 if(total === materialcost + labourcost){
    console.log("the cost equal")
 }

 //question no 7

 let secretnumber =4;
let num = prompt("Enter a number between 1to10")
if(secretnumber==num){
    console.log("🎯 Correct!")
}else if(num ==5){
    console.log("Bas ek step door ho")

}else if(num ==6){
    console.log("Thoda sa better guess")
}else if(num ==7){
    console.log("qareeb ho rahe ho")

}else if(num ==8){
    console.log("thoda sa or try karo")

}else if(num ==9){
    console.log("Bas ek step door ho")

}else if(num ==10){
    console.log("Bas ek step door ho")

}else if(num ==3){
    console.log("Bas ek step door ho")

}else if(num ==2){
    console.log("qareeb ho rahe ho")

}else if(num ==1){
    console.log("low guess ha")

}else{
 console.log("enter a number between 1 to 10")
}

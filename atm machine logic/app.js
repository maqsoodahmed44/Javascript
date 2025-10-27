alert("hello user");
let pincode = 7891;
let userpincode = prompt("Enter Your PinCode");
let atmMachine = 50000;
let salary = 40000;
if(isNaN(userpincode)){
    console.log("Please enter a numerical value")
}
else if((pincode == userpincode)) {
    console.log("kitne paise nikalne hain?");
 }else if (pincode !== userpincode){
     console.log("invalid pincode!")
}

let withdraw = prompt("Enter Your Amount");
if(salary > withdraw ) {
        salary = salary - withdraw
    atmMachine = atmMachine - withdraw
    console.log("Amount Successfully Withdraw",withdraw,"remaining balance",atmMachine)  
}
else if(salary <= withdraw && atmMachine > withdraw){
    console.log("app salary s ziada pese mangrahe ho")
}else if(atmMachine < withdraw){
    console.log("machine m itne paise nhi hain")
}else{

}



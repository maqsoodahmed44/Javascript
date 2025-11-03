//question no 1
let arr = [ [] ];
console.log(arr)
//question no 2

let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 2]
];
console.log(matrix)
//question no 03
let num = 1;
for (let i = 1; i <= 10; i++){
    console.log(num,[i])
}
//question no 04
let tableNam = prompt("Enter Your Table Number");
let tablelength = prompt("Enter Your TableLength");
for(let i = 1; i <= tablelength; i++){
    console.log(tableNam,"X",i,"=",tableNam*tablelength)
}

//question no 5

let fruits = [ ["apple", "banana", "mango", "orange", 
"strawberry"]];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
//question no 06
let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (let i = 0; i< 1; i++){
  console.log(counting)
}
// let revers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// for (let i = 15; i  >= 1; i--){
//   console.log(revers)
// }
//question no 07
 
let a = ["cake", "apple pie", "cookie", "chips", "patties"]
let searchitem = prompt("welcome to bakery what do you want")

if (a.includes(searchitem)){
  console.log(" this cookie  available" + a.indexOf(searchitem)+ "in our bakery")
}else{
  console.log("we are sorry" +searchitem+ "is not available" )
}
//question no 08


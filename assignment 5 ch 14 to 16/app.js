// chapter 15 question no 1to7

let arr = ["", {}, "maqsood", 123, true,];
console.log(arr);

let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
console.log(qualification)

// question no 08

let studentName = ["maqsood", "daniyal", "saqib",]
let studentMarks = [70,60,70,]
let totalmarks = 200;
let percentage = [
    (studentMarks[0] / totalmarks) * 100,
    (studentMarks[1] / totalmarks) * 100,
    (studentMarks[2] / totalmarks) * 100,

]
console.log("Name\tScore\tPercentage");
console.log(`${studentName[0]} ${studentMarks[0]} ${percentage[0]}%`)  
console.log(`${studentName[1]} ${studentMarks[1]} ${percentage[1]}%`)  
console.log(`${studentName[2]} ${studentMarks[2]} ${percentage[2]}%`)  

//question no 09
let colorName = ["Yellow",]

//question no 10
let scoresOfStudent = [320,230,480,120,]
scoresOfStudent.sort();
console.log(scoresOfStudent)

//question non 11


let citiesList = ["Karachi", "Lahore", "Quetta", "Islamabad","Peshawar",]
let selectCities = citiesList.slice(1,3);
console.log(citiesList);
console.log(selectCities);
//question no 12
let methods = [" This "," is ", " my ", " cat "];
let result = [methods.join()]
let results = (methods.join())
console.log("Array:")
console.log(result);
console.log("String:")
console.log(results);
//question no 13

let fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");

console.log(fifo)
console.log(fifo.shift())
console.log(fifo.shift())
console.log(fifo.shift())
console.log(fifo.shift())
//question no 14
let lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");
console.log("lifo method-->")

console.log(lifo.pop()); 
console.log(lifo.pop()); 
console.log(lifo.pop());
console.log(lifo.pop());

//question no 15

let brands = ["Motorolla","NOkia","Apple","Google",]

console.log(brands)




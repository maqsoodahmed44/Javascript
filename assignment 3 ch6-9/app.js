// chapter 06 to 09
// question 01
let h = "<h1>Result<br>"
document.writeln(h)

let d = "10"
document.writeln(`<h3>The value of d is: `, d)


document.writeln(`<br><br> <br>The value of ++d is`, ++d)
document.writeln(`<br> Now The value of d is`, d)
document.writeln(`<br> <br> <br> The value of d++ is`, d++)
document.writeln(`<br> Now The value of d is`, d)
document.writeln(`<br><br> <br> Now The value of --d is`, --d)
document.writeln(`<br> Now The value of d is`, d)
document.writeln(`<br> <br> <br>The value of d-- is`, d--)
document.writeln(`<br> Now The value of d is`, d)

// question 02

// let a = `2`
// let b = `1`
// let result = `--a - --b + ++b + b--`
// a= 1 - 0 +1 +1 + 0
// b= 0
// 1-0+1+1+0 = 3
// document.writeln(result)
let a = `1`
let b = `0`
document.writeln(`<br><br><br>a is 1`)
document.writeln(`<br>b is 0`)
document.writeln(`<br>result is 3`)

// question no = 03

let userName = prompt(`Enter Your Name`)
console.log("username",userName)
document.writeln(`<h1>HELLO USER`, userName,"<br> <br> <br>");
//question no 05

let tableNum = prompt("Enter Table Number", 5)
document.writeln(tableNum, "X", 1, "=", tableNum * 1,"<br>");
document.writeln(tableNum, "X", 2, "=", tableNum * 2,"<br>");
document.writeln(tableNum, "X", 3, "=", tableNum * 3,"<br>");
document.writeln(tableNum, "X", 4, "=", tableNum * 4,"<br>");
document.writeln(tableNum, "X", 5, "=", tableNum * 5,"<br>");
document.writeln(tableNum, "X", 6, "=", tableNum * 6,"<br>");
document.writeln(tableNum, "X", 7, "=", tableNum * 7,"<br>");
document.writeln(tableNum, "X", 8, "=", tableNum * 8,"<br>");
document.writeln(tableNum, "X", 9, "=", tableNum * 9,"<br>");
document.writeln(tableNum, "X", 10, "=", tableNum * 10,"<br>");

//question no 06


let heading = "<h1>Subject TotalMarks ObtainedMakrks Percentage<br>"
document.writeln(heading)
let marks = 100
let obtained = 60 
let obtained2 = 74
let percentage2 = 100*74/100
let percentage = 100*60/100
let sum = 194/300*100
document.writeln("chemistry ", marks, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" ,obtained, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , percentage, "%" ,"<br>");
document.writeln("physics &nbsp;&nbsp;&nbsp;&nbsp;", marks, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" ,obtained,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", percentage, "%" ,"<br>");
document.writeln("math&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", marks, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtained2, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , percentage2, "%" , "<br><br>");

document.writeln( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" ,marks+marks+marks, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" ,obtained+ obtained+ obtained2, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sum)





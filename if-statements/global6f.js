var num1 = parseInt(prompt("number1"))
var num2 = parseInt(prompt("number2"))
var num3 = parseInt(prompt("number3"))
//total=parseInt(num1 + num2)
//
// if (total>num3){
//   alert("yes")
// }else{
//   alert("no")
// }
if (isNaN(num1)===true ||isNaN(num2)===true ||isNaN(num3)===true){
  alert("bad")
} else if ( (num1 + num2 > num3) && ( num2 + num3 > num1) && (num1 + num3 > num2) ) {
alert("yes")
} else {
alert("no")
}



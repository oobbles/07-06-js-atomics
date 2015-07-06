var num1 = parseInt(prompt("Gimme a number:","5"));
var num2 = parseInt(prompt("Gimme another number:","6"));
var num3 = parseInt(prompt("Gimme one more number:","1"));
var sum = parseInt(num1 + num2 + num3);

console.log(num1 + "+" + num2 + "+" + num3 + "=" + sum );
console.log(num1 + "-" + num2 + "-" + num3 + "=" + (num1-num2-num3) );
console.log(num1 + "*" + num2 + "*" + num3 + "=" + (num1*num2*num3) );
console.log(num1 + "/" + num2 + "=" + (num1/num2));
num1++;
console.log("increment" + (num1++));
num2--;
console.log("deincrement" + (num2--));

var test = parseInt(prompt("Gimme a number:","5"));
console.log(test)

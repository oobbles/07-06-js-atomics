var password = "Cool";

var guess = prompt("Guess");
var count = 0
while (password!=guess){
  count+=1;
  guess = prompt("guess again");
}

alert("yes" + count)



var answers = [];
var trivia = [];


// //7d
// for (var count=1; count < 25; count+=1){
//   if ((count % 3 == 0 && count % 5 == 0))
//     console.log("fizzbuzz");
//     else if(count % 3 == 0)
//     console.log("fizz");
//     else if (count % 5 == 0)
//       console.log("buzz");
//     else
//       console.log(count);
//   }
  // var finish=21;
  // for (var start_at=3; start_at < finish; start_at+=4)
  //   console.log("Counting:" + start_at)  ;
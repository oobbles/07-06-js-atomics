//
// var age = parseInt(prompt("What is your age?"));
//
//
// if (isNaN(age) === true) {
//   alert("Sorry, but that's not a number.")
// }
// if (age < 0) {
//   alert("You haven't been born yet.")
// }
// if (age >= 0 && age <= 15) {
//   alert("You can't drive yet, but you'll be able to in a few years")
// }
// if (age >= 16) {
//   alert("You're eligible for a driver's license")
// };
// if (age >= 21) {
//   alert("Please don't drink and drive.")
// };
// if (age >= 25) {
//   alert("You can rent a car.")
// };

//second part
var age = parseInt(prompt("What is your age?"));
var baby = (age < 0)

if (isNaN(age) === true) {
  alert("Sorry, but that's not a number.")
} else if (baby) {
  alert("You haven't been born yet.")
} else if (age >= 0 && age <= 15) {
  alert("You can't drive yet, but you'll be able to in a few years")
} else if (age >= 16 && age < 21) {
  alert("You're eligible for a driver's license")
} else if (age >= 21) {
  alert("Please don't drink and drive.")
} else if (age >= 25) {
  alert("You can rent a car.")
}


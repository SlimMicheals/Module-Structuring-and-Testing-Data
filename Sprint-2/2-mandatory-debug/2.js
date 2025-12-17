// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// I think the code will NOT work correctly.
// The function getLastDigit() is supposed to take a number (like 42 or 105)
// but the function is defined with NO PARAMETERS.
//
// Inside the function, it always uses "num", which is the constant 103 at the top.
// So no matter what number we pass into getLastDigit(...), the function will ALWAYS
// return the last digit of 103 - which is "3".
//
// So I predict that all three console.log() lines will print:
// "The last digit of 42 is 3"
// "The last digit of 105 is 3"
// "The last digit of 806 is 3"


//const num = 103;

//function getLastDigit() {
  //return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// getLastDigit is defined with no parameters: function getLastDigit() {...}
// But when we call it, we pass numbers: getLastDigit(42), getLastDigit(105), etc.
// The function ignores those numbers because it never receives them.
//
// Inside the function, it always uses the variable "num",
// which is a constant with the value 103 at the top of the file.
//
// That means getLastDigit() always returns the last digit of 103,
// which is "3", no matter what number we pass in.

// Finally, correct the code to fix the problem
// =============> write your new code here

// Fixed function
function getLastDigit(n) {
  return n.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// I changed getLastDigit() so it accepts a parameter "n".
// Now each time we call getLastDigit(42), the value 42 is received as "n".
// Then n.toString().slice(-1) correctly returns the last digit of that number.
// This removes the dependency on the global num variable.

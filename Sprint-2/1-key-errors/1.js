// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Prediction:
// I think this code will cause an error when it runs.
// The function parameter is named "decimalNumber", but inside the function
// we try to declare another variable also called "decimalNumber" using
// "const decimalNumber = 0.5". 
// JavaScript does not allow redeclaring a constant with the same name
// inside the same scope, so it will throw an error.
// I expect a "Identifier 'decimalNumber' has already been declared" error.


// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
 // const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here

// Explanation:
// The error happens because "decimalNumber" is used twice.
// First, it is the function parameter (convertToPercentage(decimalNumber)).
// Then inside the function we try to declare another constant with the same
// name using "const decimalNumber = 0.5".
// JavaScript does not allow a constant to be redeclared inside the same scope,
// so it throws an error saying the name has already been declared.
// To fix it, we must remove the inner const or use a different variable name.


// Finally, correct the code to fix the problem
// =============> write your new code here

// Fixed function
function convertToPercentage(decimalNumber) {
    const percentage = `${decimalNumber * 100}%`;
    return percentage;
}

console.log(convertToPercentage(0.5));
console.log(convertToPercentage(0.25));


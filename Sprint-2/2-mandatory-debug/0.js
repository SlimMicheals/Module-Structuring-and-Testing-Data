// Predict and explain first...

// =============> write your prediction here

// I think this code will not work correctly because the function multiply() 
// prints the result using console.log(a * b) but it does not return anything.
// When we call multiply(10, 32) inside a template string, JavaScript expects 
// the function to return a value. 
// Because there is no return statement, the function will return "undefined".
// So I expect the final output to print the correct multiplication once, 
// and then show "undefined" in the sentence.


//function multiply(a, b) {
  //console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// The function multiply() prints the result using console.log() but does not return it.
// When we call multiply(10, 32) inside the template string, JavaScript expects a value,
// but the function returns undefined. That's why the output says "undefined".


// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
    return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

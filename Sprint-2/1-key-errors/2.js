
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// Prediction:
// I think this code will cause an error because the function parameter is written as (3)
// Instead of naming the parameter (like num), we are writing a number in the function definition.
// JavaScript expects a VARIABLE name inside the parentheses, not a value.
// Because of this, I expect a syntax error before the code even runs.


//function square(3) {
    //return num * num;
//}

// =============> write the error message here

// Error message:
// SyntaxError: Unexpected number


// =============> explain this error message here

// Explanation:
// The error happens because the function is written as square(3).
// In a function definition, the part inside the parentheses must be a parameter name,
// like (num), (value), or (x). It cannot be an actual number.
// JavaScript sees the number 3 where it expects a variable name,
// so it throws a “Unexpected number” syntax error.


// Finally, correct the code to fix the problem

// =============> write your new code here

// Fixed function
function square(num) {
    return num * num;
}

console.log(square(3));
console.log(square(5));




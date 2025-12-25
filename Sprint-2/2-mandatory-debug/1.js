// Predict and explain first...
//  =============> write your prediction here

// I think this code will not work correctly because the function sum()
// has a return statement with nothing after it.
// When JavaScript sees return; it immediately stops the function
// and returns undefined.
// The line a + b will never run, so the result will be undefined.
// Therefore, the output will say: "The sum of 10 and 32 is undefined".


//function sum(a, b) {
  //return;
  //a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// The problem happens because the function uses return; on the first line.
// When JavaScript hits a return statement, it immediately leaves the function.
// That means a + b is never executed.
// A function with an empty return always returns undefined.
// To fix this, we must return the value of a + b.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


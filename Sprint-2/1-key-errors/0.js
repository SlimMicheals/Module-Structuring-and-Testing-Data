// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
 // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
// =============> write your new code here

// Prediction:
// I think this code will not work because the function uses the name "str" twice.
// The parameter is already called str, but inside the function we write "let str = ...",
// which tries to create a new variable with the same name.
// JavaScript does not allow this, so I expect an error about "str" already being declared.
// To fix it, I will probably need to use a different variable name inside the function.

function capitalise(str) {
  let firstLetter = str[0].toUpperCase();
  let restOfWord = str.slice(1);
  return firstLetter + restOfWord;
}

console.log(capitalise("hello"));
console.log(capitalise("javascript"));

// Explanation:
// When the code runs, JavaScript shows an error saying that "str" has already been declared.
// This happens because the function parameter is named "str", and inside the function we also
// try to declare another variable with the same name using "let str = ...".  
// JavaScript does not allow a variable to be redeclared in the same scope.
// To fix the problem, i replaced the inner "str" variable with two new variables:
// one for the first letter and one for the rest of the word.
// This removes the name conflict and the function works correctly.

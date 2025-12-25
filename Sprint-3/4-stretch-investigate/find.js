function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index starts at 0 and increases by 1 each time the while loop runs.
// This allows the function to check each character in the string one by one.

// b) What is the if statement used to check
// The if statement checks whether the character at the current index
// matches the character we are searching for.

// c) Why is index++ being used?
// index++ moves the index to the next position in the string.
// Without it, the loop would never move forward and would run forever.

// d) What is the condition index < str.length used for?
// This condition ensures the loop stops once we reach the end of the string.
// It prevents accessing characters outside the string.

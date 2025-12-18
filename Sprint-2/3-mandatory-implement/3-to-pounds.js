// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


 const penceString = "399p";

//    This creates a string that represents a price in pence. 
//    The "p" at the end means pence.

 const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//    This removes the last character (“p”) so we are left only with the numbers, e.g. "399".

   const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    This ensures the number always has at least 3 digits by adding zeros at the front if needed.
//    Example: "5" becomes "005". This helps keep the formatting consistent.

 const pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
      );
//    This takes all digits except the last two.
//    Those digits represent the pounds portion.

const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
//    This takes the last two digits, which represent the pence value.
//    padEnd makes sure it is always exactly two digits.

 console.log(`${pounds}.${pence}`);
//    This prints the price in pounds format, like “3.99”.


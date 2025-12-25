function isValidCardNumber(cardNumber) {
  // Convert the card number to a string
  const cardString = String(cardNumber);

  // Rule 1: Must be exactly 16 digits
  if (cardString.length !== 16) {
    return false;
  }

  let sum = 0;
  let hasDifferentDigits = false;

  // Loop through each digit
  for (let i = 0; i < cardString.length; i++) {
    const digit = Number(cardString[i]);

    // If any character is not a number, it's invalid
    if (isNaN(digit)) {
      return false;
    }

    sum += digit;

    // Check if not all digits are the same
    if (cardString[i] !== cardString[0]) {
      hasDifferentDigits = true;
    }
  }

  // Rule 2: Must contain at least two different digits
  if (!hasDifferentDigits) {
    return false;
  }

  // Rule 3: Last digit must be even
  const lastDigit = Number(cardString[15]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: Sum of digits must be greater than 16
  if (sum <= 16) {
    return false;
  }

  // If all checks pass, the card number is valid
  return true;
}

module.exports = isValidCardNumber;

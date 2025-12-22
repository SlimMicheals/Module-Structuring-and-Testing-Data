function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;

  if (numerator < 0 && denominator > 0) {
    return Math.abs(numerator) < denominator;
  }

  return numerator > 0 && numerator < denominator;
}

module.exports = isProperFraction;



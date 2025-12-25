const isProperFraction = require("./2-is-proper-fraction");

test("returns true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

// Case 2: Identify Improper Fractions:
test("returns false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toBe(false);
});

// Case 3: Identify Negative Fractions:
test("handles negative fractions correctly", () => {
  expect(isProperFraction(-2, 3)).toBe(true);
  expect(isProperFraction(-5, 3)).toBe(false);
});

// Case 4: Identify Equal Numerator and Denominator:
test("returns false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toBe(false);
});



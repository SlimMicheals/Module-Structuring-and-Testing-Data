const getCardValue = require("./3-get-card-value");

test("returns 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toBe(11);
});

test("returns number value for numeric cards", () => {
  expect(getCardValue("2")).toBe(2);
  expect(getCardValue("10")).toBe(10);
});

test("returns 10 for face cards", () => {
  expect(getCardValue("J")).toBe(10);
  expect(getCardValue("Q")).toBe(10);
  expect(getCardValue("K")).toBe(10);
});

test("throws error for invalid card", () => {
  expect(() => getCardValue("Z")).toThrow("Invalid card rank.");
});

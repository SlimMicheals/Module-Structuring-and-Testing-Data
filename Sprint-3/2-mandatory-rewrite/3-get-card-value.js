function getCardValue(card) {
  const rank = card[0]; // 👈 THIS IS THE KEY LINE

  // Handle numeric cards
  if (!isNaN(rank)) {
    const value = Number(rank);
    if (value >= 2 && value <= 10) {
      return value;
    }
  }

  // Handle face cards
  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  // Handle Ace
  if (rank === "A") {
    return 11;
  }

  // Invalid card
  throw new Error("Invalid card rank.");
}

module.exports = getCardValue;


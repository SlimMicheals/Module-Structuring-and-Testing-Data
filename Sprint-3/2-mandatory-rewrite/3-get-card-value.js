function getCardValue(card) {
    
  const rank = card.length > 1 && isNaN(card)
    ? card.slice(0, -1)
    : card;

  // Ace
  if (rank === "A") return 11;

  // Face cards
  if (["J", "Q", "K"].includes(rank)) return 10;

  // Number cards (2–10)
  const num = parseInt(rank, 10);
  if (num >= 2 && num <= 10) return num;

  // Invalid card
  throw new Error("Invalid card rank.");
}

module.exports = getCardValue;









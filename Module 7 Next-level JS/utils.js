export { getDiceRollArray };

// 11. Rolling dices based on number of dices
function getDiceRollArray(dices) {
  // Creating and returning new array and length is based on passed dices number.
  // Initializing with 0 (fill(0)) and returning random dice array with correct length
  return new Array(dices).fill(0).map(() => {
    return Math.floor(Math.random() * 6 + 1);
  });
}

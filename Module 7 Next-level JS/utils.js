export { getDiceRollArray, getDicePlaceholderhtml, getPercentage };

// 11. Rolling dices based on number of dices
function getDiceRollArray(dices) {
  // Creating and returning new array and length is based on passed dices number.
  // Initializing with 0 (fill(0)) and returning random dice array with correct length
  return new Array(dices).fill(0).map(() => Math.floor(Math.random() * 6 + 1));
}

// Generating empty dices when app loads
function getDicePlaceholderhtml(dices) {
  return new Array(dices)
    .fill(" ")
    .map(() => `<div class="placeholder-dice"></div>`)
    .join("");
}

// Calculating procentage health left on characters and returning it w/ arrow function
const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

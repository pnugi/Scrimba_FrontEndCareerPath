import {
  getDiceRollArray,
  getDicePlaceholderhtml,
  getPercentage,
} from "./utils.js";

// Converted Character to class w/ constructor and methods
class Character {
  constructor(data) {
    // 4. Assigning from data to this
    Object.assign(this, data);
    // Creating placeholder empty dices after game loads inside utils.js
    this.diceHtml = getDicePlaceholderhtml(this.diceCount);
    // For calculating % health left
    this.maxHealth = this.health;
  }

  getCharacterHtml() {
    // destructuring this passed from characters, so we dont have to use this.name example
    const { name, avatar, health, diceHtml } = this;

    // Getting healthbars to render
    const healthBar = this.getHealthBarHtml();

    return `
      <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src=${avatar} />
          <p class="health">health: <b> ${health} </b></p>
          <div class="health-bar-outer">
              <div class="health-bar-inner ${healthBar < 25 ? "danger" : ""}" 
                  style="width: ${healthBar}%;">
              </div>
          </div>
          <div class="dice-container">
            ${diceHtml}
          </div>
      </div>
      `;
  }

  // 9. Function to render dices based on number of dices
  setDiceHtml(dices) {
    // Setting currentDiceScores to rolled dices with getDiceRollArray() in utils.js
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    // Mapping diceHtml for rendering with dicescores
    this.diceHtml = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  }

  // takeDamage method to calculate dice sum and removing it from health
  takeDamage(attackScoreArray) {
    // Calculating sum of dices?
    const totalAttackScore = attackScoreArray.reduce((total, currentValue) => {
      return total + currentValue;
    });
    // Removing health from sum of opponents dices
    this.health -= totalAttackScore;
    // Conditional if health reaches 0, character is dead
    if (this.health <= 0) {
      this.health = 0;
      // Setting new value
      this.dead = true;
    }
  }

  // Method to calculate percent of healthbar and passing it to healthBar variable inside of getCharacterHtml
  getHealthBarHtml() {
    return getPercentage(this.health, this.maxHealth);
  }
}

// Exporting Character to index.js
export default Character;

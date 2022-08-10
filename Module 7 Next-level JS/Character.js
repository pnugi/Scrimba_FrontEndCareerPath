import {
  getDiceRollArray,
  getDicePlaceholderhtml,
  getPercentage,
} from "./utils.js";

function Character(data) {
  // 4. Assigning from data to this
  // We dont need anymore 'this.name = data.name' for every property what characters have
  Object.assign(this, data);

  // Creating placeholder empty dices after game loads inside utils.js
  this.diceHtml = getDicePlaceholderhtml(this.diceCount);

  this.getCharacterHtml = function () {
    // 7. destructuring data -> this passed from characters
    const { name, avatar, health, diceHtml } = this;
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
  };

  // 9. Function to render dices based on number of dices
  this.setDiceHtml = function (dices) {
    // Setting currentDiceScores to rolled dices with getDiceRollArray() in utils.js
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    // Mapping diceHtml for rendering with dicescores
    this.diceHtml = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  this.maxHealth = this.health;

  // takeDamage method to calculate dice sum and removing it from health
  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, currentValue) => {
      return total + currentValue;
    });
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      // Setting new value
      this.dead = true;
    }
  };

  // Method to calculate percent of healthbar and passing it to healthBar variable inside of getCharacterHtml
  this.getHealthBarHtml = function () {
    return getPercentage(this.health, this.maxHealth);
  };
}

// Exporting Character to index.js
export default Character;

import { getDiceRollArray } from "./utils.js";

function Character(data) {
  // 4. Assigning from data to this
  // We dont need anymore 'this.name = data.name' for every property what characters have
  Object.assign(this, data);

  this.getCharacterHtml = function () {
    // 7. destructuring data -> this passed from characters
    const { name, avatar, health, diceCount } = this;

    // 8. Passing character dicecount as parameter to getDiceHtml function which renders dices in the end
    const diceHtml = this.getDiceHtml(diceCount);

    return `
      <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src=${avatar} />
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container">
            ${diceHtml}
          </div>
      </div>
      `;
  };

  // 9. Function to render dices based on number of dices
  this.getDiceHtml = function (dices) {
    // 10. Returning within function a function which rolls dices
    return (
      // Importing this function from utils.js
      getDiceRollArray(dices)
        // 12. Mapping over rolled numbers to new array and rendering it in html
        .map((num) => {
          return `<div class="dice"> ${num} </div>`;
        })
        // Removing , from render
        .join("")
    );
  };
}

// Exporting Character to index.js
export default Character;

//4. rolling dices based on number of dices
function getDiceRollArray(dices) {
  // 5. Creating and returning new array and length is based on passed dices number. Initializing with 0 (fill(0)) and returning random dice array with correct length
  return new Array(dices).fill(0).map(() => {
    return Math.floor(Math.random() * 6 + 1);
  });
}

// 2. function to render dices based on number of dices
function getDiceHtml(dices) {
  // 3. returning within function a function which rolls dices
  return (
    getDiceRollArray(dices)
      // 6. Mapping over rolled numbers to new array and rendering it in html
      .map((num) => {
        return `<div class="dice"> ${num} </div>`;
      })
      // 7. Removing , from render
      .join("")
  );
}

// Hero
const hero = {
  id: "hero",
  name: "Wizard",
  avatar: '"images/wizard.png"',
  health: 60,
  diceCount: 3,
};

// Monster
const monster = {
  id: "monster",
  name: "Orc",
  avatar: '"images/orc.png"',
  health: 10,
  diceCount: 1,
};

// Function to render character to HTML
function renderCharacter(data) {
  // destructuring data passed from characters
  const { id, name, avatar, health, diceCount } = data;

  // 1. Passing character dicecount as parameter to getDiceHtml which renders dices in the end
  const diceHtml = getDiceHtml(diceCount);

  document.getElementById(id).innerHTML = `
   <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src=${avatar} />
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
         ${diceHtml}
      </div>
   </div>`;
}

// Calling renderCharacter and passing data
renderCharacter(hero);
renderCharacter(monster);

// 5. Same step with for loop
/*   
  const newDiceRolls = []
  for (let i = 0; i < dices; i++) {
    let diceroll = Math.floor(Math.random() * 6 + 1);
    newDiceRolls.push(diceroll);
  } 
*/

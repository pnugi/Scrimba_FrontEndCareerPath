// 1. Characters
import characterData from "./data.js";
// 3. Function to render characters
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
  // Extract first monstername from monstersArray and get that monster from characterData
  const nextMonsterData = characterData[monstersArray.shift()];

  if (monstersArray != []) {
    return new Character(nextMonsterData);
  } else {
    return {};
  }
  //return nextMonsterData ? new Character(nextMonsterData) : {};
}

// 2. Function to render character to HTML. Creating new character and passing information
const wizard = new Character(characterData.hero);
let monster = getNewMonster();

// 5. Rendering characters
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}
render();

document.getElementById("attack-button").addEventListener("click", attack);

function attack() {
  wizard.setDiceHtml();
  monster.setDiceHtml();
  wizard.takeDamage(monster.currentDiceScore);
  monster.takeDamage(wizard.currentDiceScore);
  render();

  // Checking game status
  if (wizard.dead) {
    setTimeout(() => endGame(), 1500);
  } else if (monster.dead) {
    document.getElementById("attack-button").style.visibility = "hidden";
    if (monstersArray.length > 0) {
      // Getting new monster to appear if last one is dead

      setTimeout(() => {
        monster = getNewMonster();
        render();
        document.getElementById("attack-button").style.visibility = "visible";
      }, 1000);
    } else {
      setTimeout(() => endGame(), 1500);
    }
  }
}

function endGame() {
  // Rendering win message if game is over
  const endMessage =
    wizard.dead && monster.dead
      ? "Both characters are dead. No victors"
      : wizard.dead
      ? "Monster is victorious"
      : "Wizard is victorious";
  const endEmoji =
    wizard.dead && monster.dead ? "☠️" : wizard.dead ? "☠️" : "🔮";

  // Setting whole body to ending screen
  document.body.innerHTML = `
    <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
    </div>`;
}

// Dicerolls array with for loop
/*   
  const newDiceRolls = []
  for (let i = 0; i < dices; i++) {
    let diceroll = Math.floor(Math.random() * 6 + 1);
    newDiceRolls.push(diceroll);
  } 
*/

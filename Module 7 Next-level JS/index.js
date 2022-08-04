// 1. Characters
import characterData from "./data.js";
// 3. Function to render characters
import Character from "./Character.js";

// 2. Function to render character to HTML. Creating new character and passing information
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

// 5. Rendering characters
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}
render();

// Dicerolls array with for loop
/*   
  const newDiceRolls = []
  for (let i = 0; i < dices; i++) {
    let diceroll = Math.floor(Math.random() * 6 + 1);
    newDiceRolls.push(diceroll);
  } 
*/

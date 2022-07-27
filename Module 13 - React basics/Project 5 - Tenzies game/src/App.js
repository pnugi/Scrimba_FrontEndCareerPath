import React from "react";
import Dice from "./components/Dice";
import Confetti from "react-confetti";
// Creating unique id's with nanoid
import { nanoid } from "nanoid";

export default function App() {
  // 2. Creating state to hold array of dices. Calling our randomize function
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  // Callback function as die => below
  // In React, props are used to pass information down the component tree, from parents to children.
  // In order to propagate information in the opposite direction, we can use callback functions,
  // also passed down as props from parent components to children.

  // useEffect to check state of dice array. If it changes, check values for winning condition
  React.useEffect(() => {
    // .every() checks if array is same, return true
    const allHeld = dice.every((die) => die.isHeld);
    // Picking one value and checking if all values are same
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    // if allHeld and allSae
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
    // Every time dice state changes
  }, [dice]);

  // 3. Mapping randomized dices to render them with dieElements
  const dieElements = dice.map((die) => {
    // isHeld = true/false // id = unique id // value = rolled dice number passed to dice component
    // passing down holdDice function to Dice.js which contain die.id
    return (
      <Dice
        isHeld={die.isHeld}
        key={die.id}
        value={die.value}
        holdDice={() => holdDice(die.id)}
      />
    );
  });

  // Reusable function to generate new die. Added id with nanoid()
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  // 1. Randomizing 10 dices between 1-6 and pushing them as object to array.
  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  // Function for button. Rolling dice and keeping selected buttons for next roll
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  // HoldDice function to select dice and passing id value
  function holdDice(id) {
    // using setDice function and accessing dice array
    setDice((oldDice) =>
      // mapping new die dice array from old array...
      oldDice.map((die) => {
        // ... deconstructing die object array (...die) and changing isHeld boolean if id matched,
        // If didnt match -> returning object array unchanged
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  // Resetting game after game winning condition (tenzies) is true
  function resetGame() {
    setDice(allNewDice);
    setTenzies(false);
  }

  return (
    <main>
      {tenzies ? <Confetti /> : ""}
      <div class="bg-gray-100 rounded-xl h-1/2">
        <div class="text-center">
          <h1 class="pt-14 mb-4 text-3xl font-bold">Tenzies game</h1>
          <p>Roll until all dice are the same.</p>
          <p>Click each die to freeze it at its current value between rolls.</p>
        </div>
        <container class="grid grid-cols-5 gap-4 p-12">{dieElements}</container>
        <div class="flex justify-center">
          <button
            /* Randomizing dies w/ button click (rollDice) https://reactjs.org/docs/hooks-reference.html#functional-updates */
            onClick={tenzies ? resetGame : rollDice}
            class="h-12 px-10 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700"
          >
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </div>
    </main>
  );
}

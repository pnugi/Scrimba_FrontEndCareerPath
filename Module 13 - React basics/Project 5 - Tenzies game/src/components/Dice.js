import React from "react";

export default function Die(props) {
  // variable to hold backgroundColor as conditional value (green/white)
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff",
  };

  return (
    <div
      // Clicking Dice will print unique id
      onClick={props.holdDice}
      // Conditional styles
      style={styles}
      class="text-center p-7 rounded-xl text-3xl font-bold shadow-md cursor-pointer"
    >
      {props.value}
    </div>
  );
}

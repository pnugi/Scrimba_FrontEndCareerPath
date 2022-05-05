// For loop
for (let i = 10; i < 101; i += 10) {
    console.log(i);
}

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!"
]
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

// For loop prac, 
let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += ` ${sentence[i]}`;
}
// need to add += for sentence[i] 


// Randomizing card between 1-12
let newCard = Math.floor(Math.random() * 11) + 1;

// cmd+d - ctrl+d select multiple same text

// Return
let player1Time = 102
let player2Time = 107

function totalRaceTime() {
    return player1Time + player2Time;
}
let totalTime = totalRaceTime();
console.log(totalTime);

// Function inside of an object
let player = {
    name: "Per",
    chips: 200,
    sayHello: function () {
        console.log("Heisann!")
    }
}

player.sayHello()
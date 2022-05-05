/*
The front end developer career path
Blackjack game

Learned about:
    arrays
    objects
    booleans
    if/else statements
    comparison operators
    logical operators
    for loops
    math object
    return statements
*/

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// player object
let player = {
    name: "Tom",
    chips: 120
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}'s chips: $${player.chips}`;


// Getting message-el element
let messageEl = document.getElementById("message-el");
// Getting sum-el element
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let startEl = document.getElementById("startButton");

function startGame() {
    startEl.textContent = "START GAME";
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    document.getElementById("drawCardButton").style.visibility = "visible";
    // Rendering cards 
    cardsEl.textContent = `Cards: `;
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    // Rendering sum 
    sumEl.textContent = `Sum: ${sum}`;
    // Checking state of game
    if (sum <= 20) {
        message = "Draw new card?";
    } else if (sum === 21) {
        message = "Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out!";
        isAlive = false;
        document.getElementById("drawCardButton").style.visibility = "hidden";
        startEl.textContent = "NEW GAME";
    }
    // Replacing messageEl with message
    messageEl.textContent = message;
}

// Draw card button for drawing card
function newCard() {
    if (hasBlackJack === false || isAlive === true) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

// Drawing random card and pushing it to array
function getRandomCard() {
    console.log("Drawing new card from deck!");
    // Randomizing card between 1-13
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}
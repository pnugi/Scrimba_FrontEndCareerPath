// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./Dog.js";

let dogsCount = [0, 1, 2];
let nextLiked = dogsCount.shift();

const dogDiv = document.getElementById("dog");
const likeOrDislike = document.getElementById("likeOrDislike");
const likeButton = document.getElementById("btn-like");
const dislikeButton = document.getElementById("btn-dislike");

likeButton.addEventListener("click", liked);
dislikeButton.addEventListener("click", disliked);

// Creating new dog profile based on
let dogProfile = new Dog(dogs[nextLiked]);

function render() {
  dogDiv.innerHTML = dogProfile.render();
}

// Rendering page first time
render();

// Button press functions
function liked() {
  /*   dogProfile.setMatchStatus(true); */
  dogProfile.likePress();
  nextLiked = dogsCount.shift();
  dogProfile = new Dog(dogs[nextLiked]);
  setTimeout(() => render(), 1500);
}

function disliked() {
  dogProfile.dislikePress();
  dogsCount.push(nextLiked);
  nextLiked = dogsCount.shift();
  dogProfile = new Dog(dogs[nextLiked]);
  setTimeout(() => render(), 1500);
}

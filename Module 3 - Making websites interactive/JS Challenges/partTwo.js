// Notes JS Challenges part 2

// 1
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Ville",
    age: 30,
    country: "Finland"
}

function logData() {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`);
}

logData();

// 2
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let age = 67;

if (age < 6) {
    console.log("free");
} else if (age <= 17) {
    console.log("child discount");
} else if (age <= 26) {
    console.log("student discount");
} else if (age <= 66) {
    console.log("full price");
} else {
    console.log("senior citizen discount");
}

// 3
/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log("The 5 largest countries in the world:");
for (let i = 0; i < largeCountries.length; i++) {
    console.log(`- ${largeCountries[i]}`);
}

// 4

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
let largeCountriesFixd = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// .shift() removes first item on array
largeCountriesFixd.shift();
// .pop() removes last item on array
largeCountriesFixd.pop();
// .push() adds item to end of array
largeCountriesFixd.push('Pakistan');
// .unshift() adds item on start of array
largeCountriesFixd.unshift('China');
console.log(largeCountriesFixd);

// 5
// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
let dayOfMonth = 31
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱");
} else {
    console.log("😄");
}

// 6 
// Create a function that returns a random item from the array
let hands = ["rock", "paper", "scissor"]

function rpc() {
    return hands[Math.floor(Math.random() * hands.length)];
}
console.log(rpc(hands));

// Alternative way by instructor
function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())

// 7
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function shelfItems() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") { // fruit[i]
            appleShelf.textContent += ("🍎"); // +=
        } else {
            orangeShelf.textContent += ("🍊");
        }
    }
}
shelfItems();
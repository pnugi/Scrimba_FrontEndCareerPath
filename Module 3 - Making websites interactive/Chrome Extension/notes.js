// addEventListener is more professional way to do click events, Cleaner html code and js
// IMPORTANT
inputBtn.addEventListener("click", function () {})


// textContent -> innerHTML when adding html elements
ulEl.innerHTML += `<li>${myLeads[i]}</li>`;
// alt way 
// create element -> set text content -> append to ul
const li = document.createElement("li");
li.textContent = myLeads[i];
ulEl.append(li);



// ------------------------
// DOM manipulating has a cost, so its better to do it this way
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>${myLeads[i]}</li>`;
}
ulEl.innerHTML = listItems;

// Templatestrings can be breakn in multiple lines
const email = `
Hey ${recipient}! 

How is it going? 

Cheers ${sender}`



// ------------------------
// Local storage
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

localStorage.setItem("myLeads", "www.google.com");
console.log(localStorage.getItem("myLeads"));
localStorage.clear();

//------------------------
// JSON.PARSE       string to array
// JSON.STRINGIFY   array to string
let myLeads = `["www.page.com"]`;
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

// Combining both
localStorage.setItem("myLeads", JSON.stringify(myLeads));

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


//--------------------------
// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// IMPORTANT
// Watch pt 42 about function parameters
function add(num1, num2) {
    return num1 + num2
}

console.log(add(3, 4)) // should log 7
console.log(add(9, 102)) // should log 111

// arrays as parameters
function getFirst(arr) {
    return arr[0];
}
let aray = [1, 2, 3, 4];
console.log(getFirst(aray));
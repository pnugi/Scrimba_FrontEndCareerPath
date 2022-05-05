/* CHROME EXTENSION 15/04/2022 - Scrimba.com 
Made by: Ville Kurkikangas
Chrome extension which saves text / link from browser to localStorage
Also deletes saved links/text from localStorage

I learned about:
addEventListener()
innerHTML
input.value
function parameters
localStorage
The JSON object
objects in arrays
*/

// Getting html elements
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputField = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];
const tabs = [];

// convert myLeads string to array and store it to variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// if true, render content from localstorage to list
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// Saving current tab to list
tabBtn.addEventListener("click", function () {
    // active window from current browser window
    // manifest.json permissions is needed
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href="${leads[i]}" target="_blank">${leads[i]}</a>
        </li>
        `;
    }
    ulEl.innerHTML = listItems;
};

inputBtn.addEventListener("click", function () {
    myLeads.push(inputField.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    inputField.value = "";
});

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});
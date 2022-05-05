// Invoice Generator - Idea by: Scrimba.com
// JS Challenges PT3
// Made by: Ville Kurkikangas 22/04/2022



// elements from html
const carWashBtn = document.getElementById("btn-wash");
const mowLawnBtn = document.getElementById("btn-mow");
const pullWeedsBtn = document.getElementById("btn-weed");
const sendBtn = document.getElementById("btn-send");
const orderedTasks = document.getElementById("tasks");
const totalSum = document.getElementById("totalSum");

const tasks = ["Wash Car", "Mow Lawn", "Pull Weeds"];
const prices = [10, 20, 30];
let listTasks = [];
let totalAmount = 0;

// Buttons only usable 1 time with this
let washTrue = false;
let mowLawn = false;
let pullWeeds = false;

// rendering button text
carWashBtn.innerHTML = `${tasks[0]}: $${prices[0]}`;
mowLawnBtn.innerHTML = `${tasks[1]}: $${prices[1]}`;
pullWeedsBtn.innerHTML = `${tasks[2]}: $${prices[2]}`;

// button functions 
carWashBtn.addEventListener("click", function () {
    if (washTrue === false) {
        render(0);
        countSum();
    };
    washTrue = true;
});

mowLawnBtn.addEventListener("click", function () {
    if (mowLawn === false) {
        render(1);
        countSum();
    };
    mowLawn = true;
});

pullWeedsBtn.addEventListener("click", function () {
    if (pullWeeds === false) {
        render(2);
        countSum();
    };
    pullWeeds = true;
});

// Buggy render function..
// Works left to right, but no other way around t.t
function render(i) {
    let text = `<h4>${tasks[i]}</h4><h4 id="taskEnd">$${prices[i]}</h4>`;
    // console.log(text);
    listTasks.push(text);
    orderedTasks.innerHTML += listTasks[i];
    totalAmount += prices[i];
}

function countSum() {
    totalSum.innerHTML = totalAmount;
}

// Lazy way to reset app :)
sendBtn.addEventListener("click", function () {
    location.reload();
});
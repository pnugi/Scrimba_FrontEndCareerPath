// Notes

/* PT 1
 
myPoints += 3;
--------------------

CREATING ONCLICK EVENT ON BUTTON
<button onclick = "purchase()"> Purchase - $149 </button> 
<p id="error"> </p>

GRABBING ID="error" WITH:
let errorMsg = document.getElementById("error");

CREATING FUNCTION TO CREATE TEXT WHEN USER CLICKS BUTTON
function purchase() {
    errorMsg.textContent = "something went wrong";
}

-------------------
HTML
<body>
<span id="num1-el"></span>
<span id="num2-el"></span>
<br>
<button onclick="add()">Add</button>
<button onclick="subtract()">Subtract</button>
<button onclick="divide()">Divide</button>
<button onclick="multiply()">Multiply</button>
<br>
<span id="sum-el">Sum: </span>
<script src="index.js"></script>
</body> 


JS
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

Create four functions: add(), subtract(), divide(), multiply()
DO NOT REPEAT YOURSELF
CTRL + D selects multiple occurences

let sumEL = document.getElementById("sum-el");

function add() {
    let result = num1 + num2
    sumEL.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEL.textContent = "Subtracted: " + result
}

function divide() {
    let result = num1 / num2
    sumEL.textContent = "Divided: " + result
}

function multiply() {
    let result = num1 * num2
    sumEL.textContent = "Multiplied: " + result
}

Call the correct function when the user clicks on one of the buttons
Perform the given calculation using num1 and num2
Render the result of the calculation in the paragraph with id="sum-el"

E.g. if the user clicks on the "Plus" button, you should render
"Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
*/
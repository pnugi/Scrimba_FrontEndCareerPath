let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'
];

// grabbing elements from html
let genEl = document.getElementById("generateButton");
let pw1 = document.getElementById("pw1");
let pw2 = document.getElementById("pw2");
let pw3 = document.getElementById("pw3");
let pw4 = document.getElementById("pw4");

let genpw1 = [];
let genpw2 = [];
let genpw3 = [];
let genpw4 = [];


function generatePassword() {
    clearFields();
    // getting random character from array and pushing it to password array
    for (let i = 0; i < 14; i++) {
        genpw1.push(characters[Math.floor(Math.random() * characters.length)]);
        genpw2.push(characters[Math.floor(Math.random() * characters.length)]);
        genpw3.push(characters[Math.floor(Math.random() * characters.length)]);
        genpw4.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    pw1.textContent = genpw1.join("");
    pw2.textContent = genpw2.join("");
    pw3.textContent = genpw3.join("");
    pw4.textContent = genpw4.join("");
}

function clearFields() {
    genpw1 = [];
    genpw2 = [];
    genpw3 = [];
    genpw4 = [];
}

/*
pw1.textContent += characters[Math.floor(Math.random() * characters.length)];
pw2.textContent += characters[Math.floor(Math.random() * characters.length)];
pw3.textContent += characters[Math.floor(Math.random() * characters.length)];
pw4.textContent += characters[Math.floor(Math.random() * characters.length)];
*/
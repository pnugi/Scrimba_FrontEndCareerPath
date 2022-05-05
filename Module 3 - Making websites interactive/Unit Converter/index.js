// Soloproject #1

let num = 1;
let meterToFeet = 0;
let feetToMeter = 0;
let literToGallon = 0;
let gallonToLiter = 0;
let kgToPound = 0;
let poundToKg = 0;


function calcs() {
    document.getElementById("num").textContent = `${num}`;

    // Length
    meterToFeet = (num * 3.2808399).toFixed(3);
    feetToMeter = (num / 3.2808399).toFixed(3);
    document.getElementById("lengthNums").textContent = `${num} meters = ${meterToFeet} feet | ${num} feet = ${feetToMeter} meters`;

    // Volume
    literToGallon = (num * 0.264172052).toFixed(3);
    gallonToLiter = (num / 0.264172052).toFixed(3);
    document.getElementById("volumeNums").textContent = `${num} liters = ${literToGallon} gallons | ${num} gallons = ${gallonToLiter} liters`;

    // Mass
    kgToPound = (num / 0.45359237).toFixed(3);
    poundToKg = (num * 0.45359237).toFixed(3);
    document.getElementById("massNums").textContent = `${num} kilos = ${kgToPound} pounds | ${num} pounds = ${poundToKg} kilos`
}
calcs();
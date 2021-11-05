let km = prompt("Quanti km vuoi percorrere?");
if (isNaN(km)) {
 km = prompt("Inserisci un numero!");
}

let age = prompt("Quanti anni hai?");
if (isNaN(age)) {
 age = prompt("Inserisci un numero!");
}

let prezzoTratta = km * 0.21;
let sconto;
let color;

if (age < 18) {
 sconto = (prezzoTratta * 20) / 100;
 color = "green";
} else if (age > 65) {
 sconto = (prezzoTratta * 40) / 100;
 color = "red";
} else {
 sconto = 0;
 color = "black";
}

prezzoTratta = prezzoTratta - sconto;
prezzoTratta = prezzoTratta.toFixed(2);

document.getElementById("prezzo-tratta").innerHTML = prezzoTratta;
document.getElementById("prezzo-tratta").style.color = color;

console.log(prezzoTratta);

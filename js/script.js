alert(
 "Inserisci i tuoi dati per calcolare il prezzo del biglietto. Sconto del 20% per gli under 18. Sconto del 40% per gli over 65"
);

let km = prompt("Quanti km vuoi percorrere?");
while (isNaN(km)) {
 km = prompt("Inserisci un numero!");
}

let age = prompt("Quanti anni hai?");
while (isNaN(age) || age > 99) {
 if (isNaN(age)) {
  age = prompt("Inserisci un numero!");
 }
 if (age > 99) {
  age = prompt("Inserisci un numero minore di 99");
 }
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
}

prezzoTratta = prezzoTratta - sconto;
prezzoTratta = prezzoTratta.toFixed(2);

document.getElementById("prezzo-tratta").innerHTML = prezzoTratta;
document.getElementById("prezzo-tratta").style.color = color;

console.log(prezzoTratta);

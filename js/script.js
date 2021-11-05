let km = prompt("Quanti km vuoi percorrere?");
console.log(km);

let age = prompt("Quanti anni hai?");
console.log(age);

let prezzoTratta = km * 0.21;
let sconto;

if (age < 18) {
 sconto = (prezzoTratta * 20) / 100;
} else if (age > 65) {
 sconto = (prezzoTratta * 40) / 100;
} else {
 sconto = 0;
}

prezzoTratta = prezzoTratta - sconto;
prezzoTratta = prezzoTratta.toFixed(2);

document.getElementById("prezzo-tratta").innerHTML = prezzoTratta;

console.log(prezzoTratta);

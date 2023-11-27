// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola
const word = prompt("scrivi una parola");

const wordcheck = palindroma(word);
console.log(wordcheck);

// ribalto la parola con la funzione e controllo.....
function palindroma() {
  const wordinv = word.split("").reverse().join("");
// ....se la parola scelta dall'utente è uguale alla parola girata allora è palindroma
  if (word == wordinv) {
    return word + " è palindroma";
  }
// ....se la parola è diversa da quella girata allora non lo è
  else {
    return word + " non è palindroma";
  }
}






// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// const sceltaUser = prompt("scegli pari o dispari?");
// console.log(sceltaUser);

// // inserisce un numero da 1 a 5.
// const numUser = parseInt(prompt("inserisci un numero da 1 a 5"));
// console.log(numUser);

// // Generiamo un numero random (sempre da 1 a 5) 
// const NumComp = getRandomIntInclusive(1,5);
// console.log(NumComp);

// // sommo i due numeri
// const sommaNum = numUser + NumComp;

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// if (sommaNum % 2 == 0) {
//   console.log(sommaNum + " è pari");
// }
// else {
//   console.log(sommaNum + " è dispari");
// }
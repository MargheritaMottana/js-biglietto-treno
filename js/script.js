/*
NEVER TRUST USER INPUT (':

STEPS

1. Chiedere all'utente il numero di chilometri che vuole percorrere + salvare il dato

2. Chiedere all'utente l'età del passeggero + salvare il dato

3. Calcolare il prezzo totale del biglietto, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)

4. Calcolo lo sconto del biglietto
    - SE l'utente è minorenne
    --- Sconto del 20%

    - ALTRIMENTI SE l'utente è over 65
    --- Sconto del 40%

    - ALTRIMENTI:
    --- No sconto

5 L'output del prezzo finale con massimo due decimali, per indicare centesimi sul prezzo.

6. Mostro il risultato al cliente

*/

// Step 1

const km = prompt('Quanti km devi percorrere?');
console.log('km', km, typeof km);
// trasformare valore in numero
const kmNumber = parseInt(km);
console.log('kmNumber', kmNumber, typeof kmNumber);

// Step 2

const age = prompt('Qual è la tua età?');
console.log('age', age, typeof age);
// trasformare valore in numero
const ageNumber = parseInt(age);
console.log('ageNumber', ageNumber, typeof ageNumber);

// Step 3

if (ageNumber < 18) {
    console.log('Minorenne sconto del 20%');

    const price = kmNumber * 0.21;
    console.log('price', price, typeof price);

    // Step 4
    // Sconto del 20%

    const discount = (price / 100) * 20;
    console.log('discount', discount, typeof discount);

    const discountedPrice = price - discount;
    console.log('discountedPricee', discountedPrice, typeof discountedPrice)

    // Step 5
    alert('Il prezzo del biglietto è di €' + discountedPrice.toFixed(2));

    // Step 6
    document.getElementById('costo-biglietto').innerHTML = discountedPrice.toFixed(2);
}

else if (ageNumber > 65) {
    console.log('Over 65 sconto 40%');

    const price = kmNumber * 0.21;
    console.log('price', price, typeof price);

    // Step 4
    // Sconto del 40%

    const discount = (price / 100) * 40;
    console.log('discount', discount, typeof discount);

    const discountedPrice = price - discount;

    // Step 5
    alert('Il prezzo del biglietto è di €' + discountedPrice.toFixed(2));

    // Step 6
    document.getElementById('costo-biglietto').innerHTML = discountedPrice.toFixed(2);
}

else {
    console.log('Pagare prezzo pieno');

    const price = kmNumber * 0.21;
    console.log('price', price, typeof price);

    // Step 5
    alert('Il prezzo del biglietto è di €' + price.toFixed(2));

    // Step 6
    document.getElementById('costo-biglietto').innerHTML = price.toFixed(2);
}
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 10
const num2 = 20
if (num1 > num2) {
  console.log(num1, 'è maggiore di', num2)
} else {
  console.log(num1, 'è minore di', num2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 7
if (num3 !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num4 = 10
if (num4 % 5 === 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num5 = 10
const num6 = 8
if ((num5 && num6 === 8) || num5 - num6 === 8) {
  console.log('Uguale a 8 ')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 40
const spedition = 10

if (totalShoppingCart >= 50) {
  console.log('ammontare totale', totalShoppingCart, 'con spedizione gratuita')
} else {
  console.log(
    'ammontare totale',
    totalShoppingCart + spedition,
    'con spedizione di 10 euro!'
  )
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart2 = 80 * 0.8
const spedition2 = 10

if (totalShoppingCart2 >= 50) {
  console.log('ammontare totale', totalShoppingCart2, 'con spedizione gratuita')
} else {
  console.log(
    'ammontare totale',
    totalShoppingCart2 + spedition2,
    'con spedizione di 10 euro!'
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const num7 = 4
// const num8 = 10
// const num9 = 8
// if

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerone = 10
console.log(typeof numerone)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerino = 9
let result = numerino % 2
if (result === 0) {
  console.log('numero pari')
} else {
  console.log('numero dispari')
}

//  ESERCIZIO 10
//   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

let val = 3
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'
console.log('me', me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log('me', me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log('me', me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/ const numbers = []
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log('numbers', numbers)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numbers.pop()
numbers.push(100)
console.log('gg', numbers)
/* SCRIVI QUI LA TUA RISPOSTA */

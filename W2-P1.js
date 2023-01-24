/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 7;
let y = 5;
if (x < y)
{
console.log(y)
}else {
    console.log(x)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function controllaUguale(num) {  
  if (num !== 5) {    
    console.log("not equal");
  }
}
controllaUguale(4); 
controllaUguale(5);
controllaUguale(15);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function divisibileCinque(num) {  
  if (num % 5 === 0) {    
    console.log("divisible by 5");
  }
}
divisibileCinque(4); 
divisibileCinque(30); 
divisibileCinque(15);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function ugualeOtto(num, num1) {  
  if (num === 8 || num1 === 8 || num - num1 === 8 || num + num1 === 8) {    
    console.log("uguale a 8");
  }else {
      console.log("diverso da 8")
  }
}
ugualeOtto(4,8); 
ugualeOtto(1,7); 
ugualeOtto(2,5);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
function totale(totaleShoppingCart) {  
  if (totaleShoppingCart > 50) {    
    console.log("Spedizione gratuita! Totale spesa: " + totaleShoppingCart);
  }else {
      console.log("Totale spesa: " + (totaleShoppingCart += 10))
  }
}
totale(48); 
totale(50); 
totale(105);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sconto;
function totale(totaleShoppingCart) {  
    sconto = totaleShoppingCart * 0.2;
    if ((totaleShoppingCart - sconto) > 50) {    
      console.log("WOW!! Spedizione gratuita + Black Friday!! Totale: " + (totaleShoppingCart - sconto));
    }else {
        console.log("Black Friday! Totale spesa: " + (totaleShoppingCart - sconto + 10))
    }
  }
  totale(48); 
  totale(50); 
  totale(105);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
function ordinaNumeri(num1, num2, num3) { 
  let numOrdinati = [num1, num2, num3];  
  numOrdinati.sort(function(a, b) {
    return b - a;
  });
  console.log(numOrdinati);
}
ordinaNumeri(24, 5, 8); 
ordinaNumeri(20, 25, 10);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function intero(n){
  if (typeof n === "number" && Number.isInteger (n)) {
    console.log('Numero intero');
  } else {
    console.log('Numero decimale');
  }
} 
intero(5);
intero(5.5);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function pariDispari(num) {  
  if (num % 2 === 0) {    
    console.log("numero pari");
  }else { console.log('numero dispari')}
}
pariDispari(4); 
pariDispari(30); 
pariDispari(15);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
  if (val > 10) {
      console.log("Maggiore di 10");
    } else if (val > 5) {
      console.log("Maggiore di 5");
    } else {
      console.log("Inferiore a 5");
    }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
let val = 25
  if (val < 10) {
      console.log("Small");
    } else if (val < 5) {
      console.log("Tiny");
    } else if (val < 15){
      console.log("Medium");
    } else if (val < 20){
      console.log('Large');
    } else {
      console.log('Huge');
    }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
function maleFemale(ismale){
  ismale == 'si' ? gender = 'male' : gender = 'female';
  console.log(gender);
}
maleFemale('si');
maleFemale('no');

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/
let n = 0;
while (n <=5 && n >= 0) {
  console.log(n);
  n++;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/
for (n = 0; n <=10; n++ ) {
  console.log(n);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
for (n = 0; n <=10; n++ ) {
  if (n !== 3 && n !== 8)
  console.log(n);
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
for (n = 0; n <=15; n++ ) {
  if (n % 2 == 0) {
  console.log(n + ': è un numero pari');
} else { console.log (n + ': è un numero dispari') }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (n = 1; n <=100; n++ ) {
  if (n % 5 == 0 && n % 3 == 0) {
  console.log('FizzBuzz');
} else if(n % 5 == 0) {
  console.log('Buzz');
} else if (n % 3 == 0) {
  console.log('Fizz');
} else {
  console.log(n);
}
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
let day = 4;
switch (day) {
  case 1:
    day = 'Lunedì'
    break;
  case 2:
    day = 'Martedì'
    break;
  case 3:
    day = 'Mercoledì'
    break;
  case 4:
    day = 'Giovedì'
      break;
  case 5:
    day = 'Venerdì'
      break;
  case 6:
    day = 'Sabato'
      break;
  case 7:
    day = 'Domenica'
    break;
    default:
      console.log('Sono finiti i giorni della settimana!!')
} 
console.log (day);

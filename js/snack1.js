console.log('JS OK');

/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let sum = 0;
let i = 1;
while (i <= 5) {
    const num = parseInt(prompt(`Inserisci un numero (${i}/5)`));
    if (!isNaN(num)) {
        sum += num;
    }
    i++
}
console.log(sum)


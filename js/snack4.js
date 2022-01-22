/* 
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const numbers = [12, 25, 898, 856, 66, 10, 96];

let sum = 0;
let i = 0;
while (i < numbers.lenght) {
    if (i % 2 !== 0) {
        sum += numbers[i];
    }
    i++;
}
console.log(sum);
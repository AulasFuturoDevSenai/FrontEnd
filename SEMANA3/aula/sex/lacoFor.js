/*
Some os números pares de 0 a 100;

Exiba o resultado da soma no console;

*/
let somatorio = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2===0) {
        somatorio += i;
    }
    
}

console.log('O somatorio dos números pares é ' , somatorio);
const numero = parseInt(prompt('Digite um número: '));

const numeroPar = numero %2 === 0;

// usando ternario
numeroPar ?
    console.log('O numero é par!') :
    console.log('O numero é Ímpar!');

/*
//mesmo codigo so que usando if
if (numeroPar) {
    console.log('O numero é par!');
}else {
    console.log('O numero é Ímpar! ')
}
*/


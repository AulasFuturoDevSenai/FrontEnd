/*
Receba um número digitado pelo usuário;

Calcule o fatorial deste número.

PS.: O fatorial de um número é resultante da multiplicação do número pelos seus antecessores.

*/

const numero = parseInt(prompt('Digite um número inteiro positivo para calcular o fatorial: '));

if (isNaN(numero) || numero < 0) {
    console.log('Por favor, digite um número inteiro positivo válido.');
}else {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}.`);
}



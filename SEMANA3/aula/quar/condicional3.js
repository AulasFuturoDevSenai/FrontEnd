const numero = parseInt(prompt('Digite um número: '));

const numeroPar = numero %2 === 0;

if (numeroPar) {
    console.log('O numero é par!');
}else {
    console.log('O numero é Ímpar! ')
}

/*Extra (com validação de entrada):
const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
  console.log("Valor inválido. Por favor, digite um número.");
} else {
  const numeroPar = numero % 2 === 0;
  if (numeroPar) {
    console.log("O número é par!");
  } else {
    console.log("O número é ímpar!");
  }
}
*/
//isNaN() verifica se o valor é Não numérico.
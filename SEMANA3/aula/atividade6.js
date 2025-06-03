/* Atividade V: Utilizando o prompt, crie um script que:

Receba um número decimal do usuário;

Arredonde este número digitado para o inteiro mais próximo e exiba o resultado no console do navegador;
*/

let numeroDecimal = Number(prompt("Digite um numero decimal"));

let arredondado = Math.round(numeroDecimal);

console.log("Numero arredondado: " + arredondado);
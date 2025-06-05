/*
EXEMPLO NUMBER: Juntos vamos criar um script que:

Receba 3 notas digitadas pelo usuário;

E coloque no console do navegador a média dessas notas apresentando o resultado com 2 casas decimais

*/

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a primeira nota: "));
let nota3 = Number(prompt("Digite a primeira nota: "));

//calculo media
let media = (nota1 + nota2 + nota3) /3;

//Exibir a media com 2 casas decimais
console.log("A média das notas é: " + media.toFixed(2));
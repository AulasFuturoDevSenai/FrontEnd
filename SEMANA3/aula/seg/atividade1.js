/*AtividadeI Utilizando o prompt, crie um script que:

Receba o nome de uma cidade

Coloque no console do navegador:
A string recebida em maiúsculo;
A string recebida em minúsculo;
*/
const cidade = prompt("Digite o nome de uma cidade");
//transforma a string toda em letras maiúsculas.
console.log('Cidade em Maiusculas: ' + cidade.toUpperCase());
//transforma a string toda em letras minúsculas.
console.log('Cidade em Minusculas: ' + cidade.toLowerCase());
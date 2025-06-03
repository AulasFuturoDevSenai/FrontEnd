//Atividade II
/* Crie um script que:

Crie uma variável chamada mensagem com o valor: “Eu amo programar em Java”

Substitua a palavra ‘Java’ por ‘JavaScript’ e exiba o resultado no console do navegador
*/

let mensagem = "Eu amo programar em Java";

let novaMensagem = mensagem.replace("Java", "JavaScript");

console.log(novaMensagem);

//posso fazer direto sem criar uma nova variavel

let frase = "Eu amo estudar";

console.log(frase.replace("estudar", "dar aulas"));
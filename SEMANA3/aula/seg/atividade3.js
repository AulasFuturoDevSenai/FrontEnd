
/*Atividade III: Utilizando o prompt, crie um script que:

Receba o email do usuário;

Extraia e exiba o nome do usuário do email (todo o valor antes do @) no console do navegador
*/

let email = prompt("Digite um email válido");

//Extrai o nome do usuario antes do @
let nomeUsuario = email.split("@")[0];

console.log("Nome de usuario", nomeUsuario);

//fazer direto sem criar uma variavel para guardar o nome do usuario;
console.log("Usuário do email: " + email.split("@")[0]);
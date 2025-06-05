const frase = prompt('Digite uma frase: ');
const palavra = prompt('Digite uma palavra: ');

// Converte ambas as entradas para minúsculas para evitar erro por causa de letras maiúsculas
const fraseNormalizada = frase.toLowerCase();
const palavraNormalizada = palavra.toLocaleLowerCase();

// Verifica se a palavra está contida na frase
const palavraEncontrada = fraseNormalizada.includes(palavraNormalizada);

// usando ternario
palavraEncontrada ? 
    console.log(`Palavra ${palavra} encontrada na frase!`) : 
    console.log(`Palavra ${palavra} não encontrada na frase!`);

/*
//Mesmo codigo so que usando o if
if(palavraEncontrada){
    console.log(`Palavra ${palavra} encontrada na frase!`);
}else {
    console.log(`Palavra ${palavra} não encontrada na frase!`)
}
*/


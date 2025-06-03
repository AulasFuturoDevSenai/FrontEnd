let frase = prompt('Digite uma frase: ');

// Capitaliza cada palavra
let resultado = frase
    .split(' ')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join(' ');

console.log('Frase com iniciais maiúsculas: ' , resultado);

/*
.split(' '): divide a frase em palavras.

.map(...): percorre cada palavra e transforma:

charAt(0).toUpperCase(): deixa a primeira letra maiúscula.

slice(1).toLowerCase(): o restante da palavra fica minúsculo.

.join(' '): junta tudo novamente com espaços.*/
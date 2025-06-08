/*
const limite = parseInt(prompt("Digite o limite de números para sequência de Fibonacci:"));

if (isNaN(limite) || limite < 0) {
    console.log("Por favor, insira um número válido maior ou igual a zero.");
} else {

    let a= 0;
    let b = 1;
// Exibe o primeiro número da sequência
    console.log("Sequência de Fibonacci até o limite " + limite + ":");
    console.log(a); // Imprime o primeiro número da sequência

     // Enquanto o próximo número for menor ou igual ao limite, continue
    while (b <= limite) {
        console.log(b);

        let proximo = a + b; // Calcula o próximo número da sequência

        a= b; // Atualiza a para o próximo número
        b = proximo; // Atualiza b para o próximo número
    }
}

*/

// Usando o DOwhile para exibir a sequência de Fibonacci

const limite = parseInt(prompt("Digite o limite de números para sequência de Fibonacci:"));

if (isNaN(limite) || limite < 0) {
    console.log("Por favor, insira um número válido maior ou igual a zero.");
} else {

    let a = 0;
    let b = 1;

    console.log("Sequência de Fibonacci até o limite " + limite + ":");
    console.log(a); // Imprime o primeiro número da sequência

    do {
        console.log(b);

        let proximo = a + b; // Calcula o próximo número da sequência

        a = b; // Atualiza a para o próximo número
        b = proximo; // Atualiza b para o próximo número
    } while (b <= limite);
}
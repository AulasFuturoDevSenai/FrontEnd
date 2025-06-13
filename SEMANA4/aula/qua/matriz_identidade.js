const num = prompt("Digite o tamanho da matriz identidade: ");

let linhaMatriz = [];


    for (let linha = 0; linha < num; linha++) {
        for (let coluna = 0; coluna < num; coluna++) {
            if (linha === coluna) {
                linhaMatriz.push(1); // Coloca 1 na diagonal principal
            } else {
                linhaMatriz.push(0); // Coloca 0 nas outras posições
            }
        }
    }
console.log("Matriz Identidade:");
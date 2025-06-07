// Solicita ao usuário um número inteiro para definir a ordem da matriz
const ordem = parseInt(prompt('Digite um número inteiro para definir a ordem da matriz: '));

// Verifica se a ordem é um número válido
if (isNaN(ordem) || ordem <= 0) {
    console.log('Número inválido. Por favor, digite um número inteiro positivo.');
} else {
    // laço externo para criar a matriz
    for (let linha = 0; linha < ordem; linha++) {
        let linhaTexto = ''; // Variável para armazenar a linha da matriz.
        
        // laço interno para preencher a linha da matriz
        for (let coluna = 0; coluna < ordem; coluna++) {
            // Verifica se a posição da diagonal principal.
            if (linha === coluna) {
                linhaTexto += '1 '; // Adiciona '1' na diagonal principal.
            } else {
                linhaTexto += '0 '; // Adiciona '0' nas outras posições.
            }
        }

        // Exibe a linha da matriz. 
        console.log(linhaTexto.trim()); // trim() remove espaços extras no final da linha.
    }
}
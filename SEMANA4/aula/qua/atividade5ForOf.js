
// Array original com diferentes tipos de dados
const dados = [123, "texto", true, "palavra", 99, "JS"] ;

// Novo array para armazenar apenas strings
const apenasString = [];

// Loop for...of para iterar sobre o array original
for (const valor of dados) {
    // Verifica se o valor é uma string
    if(typeof valor === 'string'){
        apenasString.push(valor); // Adiciona o valor ao novo array se for uma string

    }
}

console.log('Apenas strings:', apenasstring);
// Saída: Apenas strings: [ 'texto', 'palavra', 'JS' ]
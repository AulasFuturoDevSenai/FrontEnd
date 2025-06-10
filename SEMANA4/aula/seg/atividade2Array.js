/*const carrinho = [];

while (true) {
    // Solicita o nome da fruta ao usuário
    const  fruta = prompt('Digite uma fruta para adicionar ao carrinho (ou "sair" para finalizar):');

    // Verifica se o usuário deseja sair
    if (fruta.toLowerCase () === 'sair') {
        console.log('Carrinho finalizado! frutas no carrinho:', carrinho);
        break;

        // Adiciona a fruta ao carrinho
    carrinho.push(fruta);
    
    // verifica se o número de frutas ultrapassa 5
    if (carrinho.length > 5) {
        console.log('Carrinho cheio! Você não pode adicionar mais frutas.');
        // Remove a fruta mais antiga
        carrinho.shift();
    }
}
}
*/


let textoSaida = '';
const carrinho = [];

do {
    const fruta = prompt('Digite uma fruta para adicionar ao carrinho (ou "sair" para finalizar):');
    carrinho.unshift(fruta);

    if (fruta.toLowerCase() === 'sair') {
        console.log('Carrinho finalizado! Frutas no carrinho:', carrinho);
        break;
    }

    if (carrinho.length > 5) {
       // Remove a fruta mais antiga
        carrinho.pop();
    }

    textoSaida = prompt('Digite um texto (ou "sair" para finalizar):');

} while (textoSaida.toLowerCase() !== 'sair');
console.log('Carrinho finalizado! Frutas no carrinho:', carrinho);
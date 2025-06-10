const carrinho = [];

let fruta;

do {
    fruta = prompt('Digite uma fruta para adicionar ao carrinho (ou "sair" para finalizar):');

    if (fruta.toLowerCase() === 'sair') {
        console.log('Carrinho finalizado! Frutas no carrinho:', carrinho);
        break;
    }

    carrinho.push(fruta);

    if (carrinho.length > 5) {
        console.log('Carrinho cheio! Você não pode adicionar mais frutas.');
        // Remove a fruta mais antiga
        carrinho.shift();
    }
} while (true);

console.log('Carrinho finalizado! Frutas no carrinho:', carrinho);
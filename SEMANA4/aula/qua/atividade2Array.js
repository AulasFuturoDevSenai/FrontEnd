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
    

    if (fruta.toLowerCase() === 'sair') {
        console.log('Carrinho finalizado! Frutas no carrinho:', carrinho);
        break;
    }
    // Adiciona a fruta no início da lista
  carrinho.unshift(fruta);

  // Se o carrinho tiver mais de 5 frutas, remove a mais antiga (última da lista)
  if (carrinho.length > 5) {
    carrinho.pop();
  }

} while (true);

// Mostra no console as frutas no carrinho
console.log("Frutas no carrinho:", carrinho);
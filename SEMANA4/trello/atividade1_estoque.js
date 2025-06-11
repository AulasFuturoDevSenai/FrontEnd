const produtos = [
    { nome: "Notebook", estoque: 4},
    { nome: "Monitor", estoque: 0},
    { nome: "Teclado", estoque: 2},
    { nome: "Mouse", estoque: 0},
];
// Filtra os produtos que estão em estoque
const produtosEmEstoque = produtos.filter(function(produto) {
    return produto.estoque > 0;
});

// Exibe os nomes dos produtos em estoque
console.log("Produtos em estoque:", produtosEmEstoque);

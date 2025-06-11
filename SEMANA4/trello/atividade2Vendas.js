const vendas = [
    { produto: "Notebook", valor: 2500 },
    { produto: "Monitor", valor: 1200 },
    {produto: "Teclado", valor: 250 }
];
        
// variavel para armazenar o total de vendas
let totalVendas = 0;

// Percorre o array de vendas e exibe os detalhes de cada venda
vendas.forEach(function(item) {

    console.log(`Produto vendido: ${item.produto} | Valor: R$ ${item.valor}`);

    totalVendas += item.valor; // Soma o valor da venda ao total
});

// Exibe o total de vendas
console.log
const precos = [12.5, 30, 99.99, 5];

const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2)}`);

console.log('Preços formatados:', precosFormatados);
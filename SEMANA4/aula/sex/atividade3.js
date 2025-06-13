const usuario = {
    nome: "João",
    idade: 30,
    email: "joao@example.com",
    cpf: '123.456.789-00',
    telefone: '(11) 98765-4321',
    endereco: 'Rua das Flores, 123',
    ativo: true
};

//contar a quantidade de propriedades do objeto
let quantidadePropriedades = 0;

for (let propriedade in usuario) {
    quantidadePropriedades++;
}

// Exibir a quantidade de propriedades do objeto
console.log(`O objeto possui ${quantidadePropriedades} propriedades.`);

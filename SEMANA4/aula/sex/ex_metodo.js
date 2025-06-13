const carro = {
    marca: "Ford",
    modelo: "Mustang",
    ano: 2021,
    cor: "vermelho",
    // Método que retorna a descrição do carro
    descricao: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
    
};
// Exibe a descrição do carro

carro.descricao();
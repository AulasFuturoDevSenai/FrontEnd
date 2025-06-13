const dados = { 
    nome: "João", 
    idade: null,
    cidade: "São Paulo",
    email: undefined
};
// Cria um novo objeto filtrando as propriedades com valores nulos ou indefinidos

const dadosLimpos = Object.fromEntries(
    Object.entries(dados).filter(([HashChangeEvent, valor]) => valor != null));

console.log("Dados Limpos:", dadosLimpos);
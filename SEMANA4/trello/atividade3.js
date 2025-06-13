const dadosPessoais = { nome: "Lucas", idade: 30 };
const endereco = { cidade: "São Paulo", estado: "SP" };

//Junta os dois objetos em um novo objeto
const pessoaCompleta = { ...dadosPessoais, ...endereco };
console.log("Pessoa Completa:", pessoaCompleta);
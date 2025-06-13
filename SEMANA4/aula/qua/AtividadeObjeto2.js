// criando o array de alunos
const alunos = [
  { nome: "Ana", turma: "1A", nota: 8 },
  { nome: "Bruno", turma: "1B", nota: 5 },
  { nome: "Carla", turma: "1C", nota: 7 },
  { nome: "Diego", turma: "1A", nota: 6 },
  { nome: "Eduarda", turma: "1B", nota: 9 }
];

//Percorre e adicionar a propriedade "aprovado" com base na nota
alunos.forEach(aluno => {
    aluno.aprovado = aluno.nota >= 6;
});

// Exibe o array atualizado com a nova propriedade
console.log(alunos);    
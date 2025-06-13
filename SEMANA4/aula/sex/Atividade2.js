// Array de alunos com nome, turma e nota
const alunos = [
  { nome: 'Ana', turma: 'A', nota: 7.5 },
  { nome: 'Bruno', turma: 'B', nota: 5.8 },
  { nome: 'Carla', turma: 'A', nota: 9.2 },
  { nome: 'Daniel', turma: 'C', nota: 4.5 },
  { nome: 'Eduarda', turma: 'B', nota: 6.3 }
];

//Percorre o array de alunos e adiciona a propriedade "aprovado" com base na nota.
alunos.forEach(aluno => {
    aluno.aprovado = aluno.nota >= 6;   
});

// Exibe o array atualizado com a nova propriedade "aprovado"
console.log('Lista de alunos: ', alunos);
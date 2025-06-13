const aluno = [
  { nome: 'Ana', turma: 'A', nota: 7.5 }

];
// Percorre o array de alunos e exibe as informações de cada um
for (let propriedade in aluno) {
  console.log('Propriedade: ', propriedade);
  console.log('Valor: ', aluno[propriedade]);
}
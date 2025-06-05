const nota = parseFloat(prompt('Digite a nota do aluno: '));

// Verifica se o valor digitado é um número válido entre 0 e 10
if(isNaN(nota) || nota <0 || nota > 10) {
    console.log('Nota inválida, digite um número entre 0 e 10');
} else if ( nota < 6) {
        console.log('E');
} else if (nota < 7) {
    console.log('D');
} else if (nota < 8) {
    console.log('C');
} else if (nota < 9) {
    console.log('B');
} else {
    console.log('A');
}
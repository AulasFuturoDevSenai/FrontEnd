const conceito = prompt('Digite a letra correspondente ao a nota do aluno "Conceito": ');

const conceitoAjustada = conceito.toUpperCase();

switch (conceitoAjustada) {
    case "A":
        console.log('Excelente');
        break;
    case "B":
        console.log('Muito Bom');
        break;
    case "C":
        console.log('Bom');
        break;
    case "D":
        console.log('Regular');
        break;
    case "E":
        console.log('Reprovado');
        break;
    
    default:
        console.error('Conceito inválido')
        break;
}
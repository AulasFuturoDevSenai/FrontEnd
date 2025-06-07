//calcular o frete de um produto

const regiao = prompt('Digite a região desejada: ');
const peso = parseFloat(prompt('Digite o peso do produto em kg: '));
const regiaoFormatada = regiao.trim().toUpperCase();

let valorFrete;


switch (regiaoFormatada) {
    case 'NORTE':
        valorFrete = 24 + (2.20 * peso);
        break;
    case 'NORDESTE':
        valorFrete = 22 + (2.10 * peso);
        break;
    case 'CENTRO-OESTE':
        valorFrete = 20 + (2.00 * peso);
        break;
    case 'SUDESTE':
        valorFrete = 16 + (1.80 * peso);
        break;    
    case 'SUL':
        valorFrete = 18 + (1.90 * peso);
        break;

    default:
        console.log('Região inválida. Por favor, tente novamente.');
        break;
}

//Se a região for válida, exibe o valor do frete
if (valorFrete !== undefined) {
    console.log(`O valor do frete para a região ${regiaoFormatada} é R$ ${valorFrete.toFixed(2)}`);
}

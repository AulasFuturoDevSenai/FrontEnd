const regiao = prompt('Digite a região desejada: ');
const peso = parseFloat(prompt('Digite o peso do produto em kg: '));

let norte = 24 + (2,20 * peso);

if (regiao.toLocaleUpperCase == 'NORTE') {
    console.log(norte.toFixed(2));
}


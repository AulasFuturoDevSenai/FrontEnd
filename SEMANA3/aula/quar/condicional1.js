let numero_1 = parseInt(prompt('Digite o primeiro número: '));
let numero_2 = parseInt(prompt('Digite o segundo número: '));

if(numero_1 > numero_2) {
    console.log('primeiro numero ' + numero_1 + 'maior que o segundo numero ' + numero_2);

} else if ( numero_2 > numero_1){
    console.log('segundo numero ' + numero_2 + 'maior que o primeiro numero ' + numero_1);
}else {
    console.log('os Números são iguais');
}



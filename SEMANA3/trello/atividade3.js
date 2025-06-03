let dia = parseInt(prompt('Digite o dia com dois digitos: '));
let mes = parseInt(prompt('Digite o mês com dois digitos: '));
let ano = parseInt(prompt('Digite o ano com dois digitos: '));

let dataValida = true; // Variavel de controle

//Validação do ano
if (ano <=0 || ano >=9999) {
    dataValida = false;
}

//Validação do mês
else if (mes <1 || mes >=12) {
    dataValida = false;
}

//Validação do dia de acordo com o mês
else {
    let diasNoMes;

    //Define o número de dias de cada mês
    if (mes === 2) {
        diasNoMes = 28; 
    } else if ([4, 6, 9, 11].includes(mes)){
        diasNoMes = 30;
    } else {
        diasNoMes = 31;
    }
    
    // Verifica se o dia é valido para o mês
    if (dia < 1 || dia > diasNoMes) {
        dataValida = false;
    }
}

//Resultado no console
if (dataValida) {
    console.log("Data válida");
} else {
    console.log("Data inválida");
}


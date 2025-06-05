/*const letra = prompt('Disgite uma letra: ');
const letraAjustada = letra.toUpperCase();

switch (letraAjustada) {
    case "A":
        console.log(`A letra digitada ${letraAjustada} é uma vogal`);
        break;
    case "E":
        console.log(`A letra digitada ${letraAjustada} é uma vogal`);
        break;
    case "I":
        console.log(`A letra digitada ${letraAjustada} é uma vogal`);
        break;
    case "O":
        console.log(`A letra digitada ${letraAjustada} é uma vogal`);
        break;
    case "U":
        console.log(`A letra digitada ${letraAjustada} é uma vogal`);
        break;                        
    default:
        console.log(`A letra digitada ${letraAjustada} é uma consoante`);
        break;
}*/




//FORMA OTIMIZADA 

const letra = prompt('Disgite uma letra: ');

//verificando se a entrada digitada é inválida, ou seja, não é uma única letra do alfabeto
if (!letra || letra.length !== 1 || !/^[a-zA-Z]$/.test(letra)) {
    console.log('Entrada inválida. Digite apenas uma única letra do alfabeto.');
} else {
    const letraAjustada = letra.toUpperCase();

    switch (letraAjustada) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            console.log(`A letra digitada ${letraAjustada} é uma vogal.`);
            break;
        default:
            console.log(`A letra digitada ${letraAjustada} é uma consoante.`);   
            break
    }
}

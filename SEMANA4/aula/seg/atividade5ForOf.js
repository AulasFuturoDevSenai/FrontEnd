

const dados = [123, "texto", true, "palavra", 99, "JS"] ;

const apenasstring = [];

for (const valor of dados) {
    if(typeof valor === 'string'){
        apenasstring.push(valor);

    }
}

console.log('Apenas strings:', apenasstring);
// Saída: Apenas strings: [ 'texto', 'palavra', 'JS' ]
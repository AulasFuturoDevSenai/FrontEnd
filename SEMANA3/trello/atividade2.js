let capitalInicial = parseFloat(prompt('Digite o Capital inicial: '));

let meses = parseInt(prompt('Digite o período da aplicação (em meses): '));

let capitalFinal = capitalInicial * Math.pow(1 + 0.05, meses); 

console.log('Capital final após ' + meses + ' meses: R$ ' + capitalFinal.toFixed(2));
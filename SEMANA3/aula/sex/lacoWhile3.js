const numeroSecreto = Math.floor(Math.random() * 50) + 1;

let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt('Tente adivinhar o número (entre 1 e 50):'));
}

if (palpite < numeroSecreto) {
    console.log('O numero secreto é maior!');
} else if (palpite > numeroSecreto) {
    console.log('O número secreto é menor! ');
} else {
    console.log(`Parabens! Você acertou! O número era ${numeroSecreto} `);
}

console.log(numeroSecreto);

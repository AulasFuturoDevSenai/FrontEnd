let senha;
do {
    senha = prompt('Digite a senha:');
if (senha !== '1234') {
    console.log('Senha incorreta,tente novamente.');
}

} while (senha !== '1234');

console.log('Senha correta! Acesso concedido.');
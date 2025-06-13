//let obj = new Object();
/*let obj = {
    nome: 'Nome Completo',
    email: 'nome@mail.com',
    celular: '15995959595',
    dtNascimento = '01/01/1990'
}*/
let obj = {};

obj.nome = 'Nome Completo';
obj.email = 'nome@mail.com';
obj['celular'] = '15995959595';
obj['dtNascimento'] = '01/01/1990';

console.log(typeof obj);

console.log('Nome:', obj.nome);
console.log('Nome:', obj['nome']);

console.log('Nome:', obj.celular);
console.log('Nome:', obj['celular']);
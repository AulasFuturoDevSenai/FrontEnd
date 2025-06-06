let usuario = prompt('Digite seu usuario: ').toUpperCase();
let senha = prompt('Digite sua senha: ');
let perfil = prompt('Digite o perfil (admin, editor, visitante):').toUpperCase();

if (!usuario || !senha) {
    console.log('Usuário ou senha inválidos');
} else {

    switch (perfil) {
        case "admin" :
            console.log('Acesso total');
            break;
        case "editor" :
            console.log('Acesso limitado a edição');  
            break;
        case "visitante":
            console.log("Acesso somente leitura");
            break;
        default:
            console.log("Perfil inválido");
    }
}  

/* Atividade I: Crie um script que:

Receba do usuário uma data no formato YYYY-MM-DD (ex. 2025-11-21)

Retorne com window.alert a data no formato DD/MM/YYYY

Dica: utilize o método .split() */

const dataEntrada = prompt('Digite a data no formato YYYY-MM-DD (ex. 2025-11-21):');

// divide a string em partes usando o método split
const [ano, mes, dia] = dataEntrada.split('-');

// formata a data no formato DD/MM/YYYY
const dataFormatada = `${dia}/${mes}/${ano}`;

// exibe a data formatada'
window.alert(`Data formatada: ${dataFormatada}`);

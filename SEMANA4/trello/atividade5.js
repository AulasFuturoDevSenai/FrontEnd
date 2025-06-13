/**
 * Função para filtrar dinamicamente uma lista de objetos.
 * 
 * @param {Array} lista - Lista de objetos a ser filtrada.
 * @param {Array} propriedades - Lista de propriedades que serão usadas no filtro.
 * @param {Array} valores - Lista de valores correspondentes às propriedades.
 * 
 * @returns {Array} - Lista de objetos que atendem aos filtros.
 */

const filtrarLista = (lista, propriedades, valores) => {
  if (!Array.isArray(lista) || !Array.isArray(propriedades) || !Array.isArray(valores)) {
    console.error('Os parâmetros devem ser arrays.');
    return [];
  }

  if (propriedades.length !== valores.length) {
    console.error('O número de propriedades deve corresponder ao número de valores.');
    return [];
  }

  const resultado = lista.filter(item => 
    propriedades.every((prop, index) => item[prop] === valores[index]));

    console.log(resultado);
  return resultado;
};

// Exemplo de uso

const pessoas = [
  { nome: 'Ana', idade: 25, cidade: 'São Paulo' },
  { nome: 'Bruno', idade: 30, cidade: 'Rio de Janeiro' },
  { nome: 'Carla', idade: 25, cidade: 'São Paulo' },
  { nome: 'Daniel', idade: 40, cidade: 'Curitiba' }
];

filtrarLista(pessoas, ['idade', 'cidade'], [25, 'São Paulo']);
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const filteredSpeciesID = data.species.filter((element) => {
    const inclui = ids.includes(element.id);
    return inclui;
  });
  return filteredSpeciesID;
}

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '89be95b3-47e4-4c5b-b687-1fabf2afa274');

module.exports = getSpeciesByIds;

// REQUISITO 1 :

//  implementar uma função que busque as espécies dos animais pelo ID e retorne um array com os animais dessa espécie.
//  oBS: a função deve receber vários parâmetros.
// deve retornar um array vazio se a função não receber um ID. (um parâmetro)
// se a função receber apenas um id, retorne a espécie do animal referente a este id.
// se a função receber vários ids, retorne todas as espécies referente a esses ids.

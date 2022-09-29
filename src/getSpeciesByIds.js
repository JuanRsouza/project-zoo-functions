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

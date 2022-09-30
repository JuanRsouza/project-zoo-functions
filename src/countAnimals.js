const data = require('../data/zoo_data');

const noParam = () => {
  const obj = {};
  data.species.forEach((el) => {
    obj[el.name] = el.residents.length;
  });
  return obj;
};

function countAnimals(animal) {
  if (!animal) return noParam();
  const especie = data.species.find((esp) => animal.specie === esp.name);
  const lengthResidents = especie.residents.length;
  if (animal.sex) {
    const filtered = especie.residents.filter((el) => el.sex === animal.sex);
    const numSex = filtered.length;
    return numSex;
  }
  return lengthResidents;
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
countAnimals({ specie: 'elephants', sex: 'male' });

module.exports = countAnimals;

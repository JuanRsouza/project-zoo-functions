const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((element) => element.name === animal);
  const getAge = getAnimal.residents.every((elemento) => elemento.age >= age);
  return getAge;
}

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;

const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregados = data.employees.find((e) => e.id === id);
  const primeiroAnimal = empregados.responsibleFor[0];
  const infoPrimeiroAnimal = data.species.find((a) => a.id === primeiroAnimal);
  const idadeAnimals = infoPrimeiroAnimal.residents.map((i) => i.age);
  const verificaIdadeMaior = Math.max(...idadeAnimals);
  const animalVelho = infoPrimeiroAnimal.residents.filter((an) => an.age === verificaIdadeMaior);
  const spreadArray = Object.values(...animalVelho);
  return spreadArray;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;

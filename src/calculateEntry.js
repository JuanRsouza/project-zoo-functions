const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const filtrandoChild = entrants.filter((c) => c.age <= 5);
  const tamanhoFilterChild = filtrandoChild.length;
  const filtrandoAdult = entrants.filter((a) => a.age > 5 && a.age <= 18);
  const tamanhoFilterAdult = filtrandoAdult.length;
  const filtrandoSenior = entrants.filter((s) => s.age > 18 && s.age <= 50);
  const tamanhoFilterSenior = filtrandoSenior.length;
  const obj = {
    child: tamanhoFilterChild,
    adult: tamanhoFilterAdult,
    senior: tamanhoFilterSenior,
  };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const functionCount = countEntrants(entrants);
  const sumChild = functionCount.child * 20.99;
  const sumAdult = functionCount.adult * 49.99;
  const sumSenior = functionCount.senior * 24.99;
  const sumAllPeople = sumChild + sumAdult + sumSenior;

  return sumAllPeople;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };

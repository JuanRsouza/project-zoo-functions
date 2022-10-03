const data = require('../data/zoo_data');

function daysAvailable(scheduleTarget) {
  const diasDisponiveis = data.species.find((e) => e.name === scheduleTarget);
  const arrayDisponibilidade = diasDisponiveis.availability.filter((d) => d);
  return arrayDisponibilidade;
}

function noParam(scheduleTarget) {
  const animalsAndDays = data.species.filter((el) => el.availability === (data.hours));
  console.log(animalsAndDays);
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return noParam();
  return daysAvailable(scheduleTarget);
}

console.log(getSchedule('lions'));
console.log(noParam());

module.exports = getSchedule;

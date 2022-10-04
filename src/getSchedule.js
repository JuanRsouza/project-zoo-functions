const data = require('../data/zoo_data');

const diasDaSemana = Object.keys(data.hours);

const animals = data.species.map(({ name }) => name);

function animalsAvailable(scheduleTarget) {
  const diasDisponiveis = data.species.find((e) => e.name === scheduleTarget);
  return diasDisponiveis.availability;
}

function exHibition(dia) {
  const filterSpecies = data.species.filter((animal) => animal.availability
    .includes(dia))
    .map(({ name }) => name);

  return filterSpecies;
}

function noParam() {
  const obj = {};
  diasDaSemana.forEach((dia) => {
    obj[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: exHibition(dia),
    };
    if (dia === 'Monday') {
      obj[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return obj;
}

function getSchedule(scheduleTarget) {
  if (diasDaSemana.includes(scheduleTarget)) return { [scheduleTarget]: noParam()[scheduleTarget] };
  if (animals.includes(scheduleTarget)) return animalsAvailable(scheduleTarget);
  return noParam();
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;

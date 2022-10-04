const data = require('../data/zoo_data');

const { species, employees } = data;

function getInformationEmployees(parametro) {
  const { id,
    firstName,
    lastName,
    responsibleFor } = employees.find((emps) => emps.firstName === parametro.name
      || emps.lastName === parametro.name
      || emps.id === parametro.id);
  const object = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((idSpecie) =>
      species.find((specie) => specie.id === idSpecie).name),
    locations: responsibleFor.map((idSpecie) =>
      species.find((specie) => specie.id === idSpecie).location),
  };
  return object;
}

function noParam() {
  const reduzindo = employees.reduce((employeeTotal,
    { id,
      firstName,
      lastName,
      responsibleFor }) => {
    const obj = [...employeeTotal, {
      id,
      fullName: `${firstName} ${lastName}`,
      species: responsibleFor.map((idSpecie) =>
        species.find((specie) => specie.id === idSpecie).name),
      locations: responsibleFor.map((idSpecie) =>
        species.find((specie) => specie.id === idSpecie).location),
    }];
    return obj;
  }, []);
  return reduzindo;
}

function getParametro(parametro) {
  const achandoONome = employees.some((person) =>
    person.firstName === parametro.name
    || person.lastName === parametro.name
    || person.id === parametro.id);
  return achandoONome;
}

function getEmployeesCoverage(parametro) {
  if (!parametro) return noParam();
  if (getParametro(parametro)) return getInformationEmployees(parametro);
  if (!getParametro(parametro)) throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;

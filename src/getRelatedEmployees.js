const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  const gerentes = managers.some((el) => el === id);
  return gerentes;
}

function getRelatedEmployees(managerId) {
  isManager(managerId);
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filtrar = employees.filter((man) =>
    man.managers.some((el) => el === managerId))
    .map((index) => `${index.firstName} ${index.lastName}`);
  return filtrar;
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };

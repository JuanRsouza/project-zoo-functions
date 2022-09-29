const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const empregados = data.employees.find(
    (element) =>
      element.firstName === employeeName || element.lastName === employeeName,
  );
  return empregados;
}

console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;

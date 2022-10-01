const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it(' se getOpeningHours  é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it(' se getOpeningHoursfor chamada sem pârametros, deve retornar o objeto hours', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it(' se getOpeningHoursfor for chamada com um dia e uma hora em que o zoo está fechado, deve retornar uma mensagem avisando que o zoo está fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('  se getOpeningHoursfor for chamada com um dia e uma hora em que o zoo está aberto, deve retornar uma mensagem avisando que o zoo está aberto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });
  it('  se getOpeningHoursfor for chamada com um dia e uma hora em que o zoo está aberto, deve retornar uma mensagem avisando que o zoo está aberto', () => {
    const actual = getOpeningHours('Wednesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });
  it(' se getOpeningHours  for chamada com a hora sem AM ou PM a função lançara um erro', () => {
    expect(() => { getOpeningHours('Wednesday', '09:00-AC'); }).toThrow();
  });
  it(' se getOpeningHours  for chamada com a hora sem AM ou PM a função lançara um erro', () => {
    expect(() => { getOpeningHours('Wednesday', '09:00-AC'); }).toThrow();
  });
  it(' se getOpeningHours  for chamada com a hora errada a função lançara um erro', () => {
    expect(() => { getOpeningHours('Wednesday', '09'); }).toThrow();
  });
  it(' se getOpeningHours  for chamada com um número entre 0 e 12 no campo de horas função lançara um erro', () => {
    expect(() => { getOpeningHours('Wednesday', '80:00-AM'); }).toThrow();
  });
  it(' se getOpeningHours  for chamada com um número entre 0 e 59 no campo de minutos função lançara um erro', () => {
    expect(() => { getOpeningHours('Wednesday', '09:120-AM'); }).toThrow();
  });
  it(' se getOpeningHours  for chamada com um número entre 0 e 59 no campo de minutos função lançara um erro', () => {
    expect(() => { getOpeningHours('Segunda', '09:120-AM'); }).toThrowError('The day must be valid. Example: Monday');
  });
});

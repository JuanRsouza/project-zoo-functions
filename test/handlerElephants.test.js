const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('se handlerElephants  quando não receber uma parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it(' handlerElephants  o tipo do parâmetro for um número', () => {
    const actual = handlerElephants(8);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it(' handlerElephants  o tipo do parâmetro for um booleano', () => {
    const actual = handlerElephants(true);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it('se handlerElephants recebe um parâmetro que se econtra nas keys de elephants', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('se handlerElephants recebe o parâmetro count, executa a função computedata', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('se handlerElephants recebe o parâmetro averageAge, executa a função avarageAge', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('se handlerElephants recebe o parâmetro location, executa a função avarageAge', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('se handlerElephants recebe o parâmetro names, executa a função computedata', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('se handlerElephants recebe o parâmetro , retorna null', () => {
    const actual = handlerElephants('popularit');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

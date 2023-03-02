const math = require('./math');
jest.mock("./math");

describe('Mockando Módulos', () => {
  test("testa se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno", () => {

    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });
});

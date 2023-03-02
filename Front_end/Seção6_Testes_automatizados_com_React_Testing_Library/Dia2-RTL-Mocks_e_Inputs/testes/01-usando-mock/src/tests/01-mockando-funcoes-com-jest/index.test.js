function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
};

function divisivelPorDois() {
  return (retornaNumeroAleatorio() % 2) === 0;
};

function somaDoisNumeros() {
  return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

describe('Aprendendo sobre Mocks', () => {
  it('Testa se a função foi chamada', () => {
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled();
  });

  it('Testa o resultado da função', () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8);

    expect(somaDoisNumeros()).toBe(8);
  });

  it('Testa quantas vezes a função foi chamada', () => {
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled();
    somaDoisNumeros();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalledTimes(3);
  });

  it('Testa se retorna True quando o número é par', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(2);
    expect(divisivelPorDois()).toBe(true);
  });

  it('Testa se retorna False quando o número é ímpar', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);
    expect(divisivelPorDois()).toBe(false);
  });

});

describe('Aprendendo sobre mocks', () => {
  test("Testando se a função foi chamada.", () => {
    // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Apenas queremos saber se ela foi chamada.
    divisivelPorDois = jest.fn();
  
    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
  });

//...
  test("testando se a função foi chamada e qual seu retorno", () => {
    divisivelPorDois = jest.fn().mockReturnValue(true);

    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
    expect(divisivelPorDois()).toBe(true);
  });

  // ...
  test("testando quantas vezes a função foi chamada e qual seu retorno", () => {

    divisivelPorDois = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');

    expect(divisivelPorDois).toHaveBeenCalledTimes(0);

    expect(divisivelPorDois()).toBe("first call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);

    expect(divisivelPorDois()).toBe("second call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);

    expect(divisivelPorDois()).toBe("default value");
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
  });

});
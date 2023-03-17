//? a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos, tentou adaptá-los para que o código não quebrasse - no caso, o primeiro parâmetro foi convertido para uma string, e a operação realizada foi uma concatenação de strings através do sinal de +.
const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3'));

//?condicional que impede a pessoa usuária de quebrar a sua calculadora.
const sum2 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum2(2, '3'));

//fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw:
const sum3 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum3(2, '3'));

//? Agora a execução da função sum foi interrompida, e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.
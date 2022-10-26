//? exemplo 1 implementar um laço de repetição entre 0 e um número especificado via parâmetro (number) e mostra no console o valor da variável count de 0 a N (number).
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log); // log imprimi o action(count)

//? exemplo 2 - o segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso parâmetro action(count) dentro da função repeat. Desse modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.

const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat2(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});


//?exemplo 3 - A função recebida como argumento pela HOF, também é conhecida por callback. No exemplo 3, repeat é uma HOF que recebe isEven ou isOdd como função callback.
const repeat3 = (number, verify) => {
  for (let count = 0; count <= number; count += 1) {
    verify(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat3(3, isEven); // Testa quais números serão pares;
repeat3(3, isOdd); // Testa quais números serão ímpares;

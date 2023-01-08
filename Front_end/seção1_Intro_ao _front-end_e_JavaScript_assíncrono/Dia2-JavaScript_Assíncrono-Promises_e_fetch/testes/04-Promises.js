//! fazer testes no console do navegador, não pelo code runner

//? função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

//? promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
console.log(resolvedPromise())

//? promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
  }, 1000);
});
console.log(rejectedPromise());

// Anota aí 📝: Repare que podemos retornar qualquer valor usando a função reject, mas geralmente é uma boa prática retornar um objeto de erro.



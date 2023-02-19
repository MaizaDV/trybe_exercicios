const generateRandomNumber = () => Math.round(Math.random() * 10);

//? promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

  resolvedPromise().then((response) => { // o parâmetro response recebe o retorno do resolve
    console.log(`resolvedPromise => O número gerado é ${response}`);
  })
  console.log(resolvedPromise());


//? promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
  }, 1000);
});

rejectedPromise()
  .then((response) => {
  console.log(`rejectedPromise => O número gerado é ${response}`);
  })
  .catch((error) => { // o parâmetro error recebe o retorno do reject
    console.log(`rejectedPromise => ${error.message}`);
  })
// console.log(rejectedPromise());
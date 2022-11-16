const generateRandomNumber = () => Math.round(Math.random() * 10);

const randomPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if(randomNumber % 2 === 0) {
        resolve(randomNumber)
      } else {
        reject(new Error(`O número ${randomNumber} não é válido. Somente números pares são válidos.`))
      }
    })
  })

randomPromise()
  .then((response) => {
    console.log(`Promise resolvida => O número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(`Promise rejeitada => ${error.message}`);
  })

const drawnNumber = (myNumber, drawnNumber) => myNumber === drawnNumber; // verifica se o numero sorteado é o mesmo que o escolhido entre 1 e 5

const verifyNumber = (Number, callback) => { 
  const luckNumber = Math.floor((Math.random() * 5) + 1);
  return callback(Number, luckNumber) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(verifyNumber(1, drawnNumber));

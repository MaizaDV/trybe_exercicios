const firstNumber = 9;
const secondNumber = 3;

// exemplo 1 síncrono
let thirdNumber1 = firstNumber + secondNumber;
console.log(`Primeiro log - ${thirdNumber1}`);

thirdNumber1 = firstNumber - secondNumber;
console.log(`Segundo log - ${thirdNumber1}`);

console.log('=> -----------------');
// exemplo 2 execução assíncrono
let thirdNumber2 = firstNumber + secondNumber;
console.log(`Primeiro log - ${thirdNumber2}`);

setTimeout(() => {
  thirdNumber2 = firstNumber - secondNumber; // como essa função ainda não foi feita, ele repete o log da 14 na linha 20
}, 1000)

console.log(`Segundo log - ${thirdNumber2}`);

console.log('=> -----------------');
// exemplo 3 execução assíncrono
let thirdNumber3 = firstNumber + secondNumber;
console.log(`Primeiro log - ${thirdNumber3}`);

setTimeout(() => {
  thirdNumber3 = firstNumber - secondNumber; // como essa função vai ser executada depois de 1s, ela aparece depois do terceiro log
  console.log(`Segundo log - ${thirdNumber3}`);
}, 1000)

console.log(`Terceiro log - ${thirdNumber3}`);


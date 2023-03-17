//todo Passar funções como argumento para outras funções:
const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    return (callback()); 
    //? return (callback); poderia usar assim tbm, aqui eu não chamo a função, e chamaria somente depois com ()
}
//? console.log(printGreeting(sayHello())); aqui eu chamo a função com ()

console.log(printGreeting(sayHello));

//todo Retornar uma função de outra função:
const sumFixAmount = (amount) => {
  console.log(amount);
  return (number) => (amount) + number;
}

//? atribuição da arrow function na variável
const initialSum = sumFixAmount(15) // parâmetro amount recebe 15

console.log(initialSum(10)); // parâmetro number recebe o número 10

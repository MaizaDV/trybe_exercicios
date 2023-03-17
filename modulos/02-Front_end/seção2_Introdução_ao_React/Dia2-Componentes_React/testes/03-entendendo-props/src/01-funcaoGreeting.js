// Observe o exemplo abaixo de como seria uma função que retornaria a mesma mensagem que o componente Greeting renderiza:

function greeting(name){
  return `Hello, ${name}`;
}
console.log(greeting('Samuel'));

// ⚠️ Aviso: Assim como podemos ter vários parâmetros em uma função, conseguimos também passar inúmeras propriedades para o componente por meio das props. Adicionemos o sobrenome da pessoa à função e ao componente.

function greeting2(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting2('Samuel', 'Silva'));

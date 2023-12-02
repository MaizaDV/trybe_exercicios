let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água
console.log('=> ---------------------');

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida);

// outro modo de fazer:
// const array = [bebida, comida, animal];
// const [arroz, gato, agua] = array
// console.log(arroz, gato, agua);

//? sort() com array de strings
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

//? sort() com array de Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers);

//todo Como pode notar, a forma como ela organiza os elementos do array não é tão intuitiva. Isso ocorre, pois ela distribui sempre por ordem alfabética. No caso, quando há elementos como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode.

//? se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);

points.sort((a, b) => b - a);
console.log(points);
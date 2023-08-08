//? retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// const verifyAges = (arr, minimumAge) => {
//   return Object.values(arr).every(element => element.age >= minimumAge)
// };

//* refatora função
const verifyAges = (arr, minimumAge) => 
  Object.values(arr).every(element => element.age >= minimumAge);

console.log(verifyAges(people, 18));
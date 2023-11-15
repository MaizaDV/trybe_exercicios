const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];


//todo mesma função, usando for

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
console.log(fullNames);


//todo mesma função, usando map

const fullNames2 = persons.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

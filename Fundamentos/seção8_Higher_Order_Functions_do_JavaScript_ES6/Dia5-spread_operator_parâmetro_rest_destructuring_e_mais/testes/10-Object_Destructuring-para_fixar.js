
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

//* spread operator 
const person = {
  ...user,
  ...jobInfos,
};

//*Destructuring objects
const { name, age, nationality, profession, squad, squadInitials } = person;

console.log(person);

//* mensagem
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

//? Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável.
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

//* Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: 
//todo { propriedade:nomeVariável } = objeto.
//* Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo:
//todo const name = student.a;
//todo console.log(name); // Maria

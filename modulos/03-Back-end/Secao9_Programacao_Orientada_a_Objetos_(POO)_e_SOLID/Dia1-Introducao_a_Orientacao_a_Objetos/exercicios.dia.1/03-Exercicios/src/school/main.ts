//──── Exercício 1 ───────────────────────────────────────────────────────────────────────
import Student from "./Student";

console.log('──── Exercício 1 ───────────────────────────────────────────────────────────────────────');
const personOne = new Student('202001011', 'Maria da Silva');

console.log('personOne =>', personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log('personTwo =>', personTwo);

//──── Exercício 2 ───────────────────────────────────────────────────────────────────────

personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];

console.log('──── Exercício 2 ───────────────────────────────────────────────────────────────────────');

console.log('personOne =>', personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
import Data from "./Data";

console.log('──── Exercício 5 ───────────────────────────────────────────────────────────────────────');
const testDate = new Data(29, 1, 1989);

console.log(testDate);

console.log('──── Exercício 6 ───────────────────────────────────────────────────────────────────────');

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// // data inválida
// const invalidDate = new Data(31, 2, 2021);

// console.log('Teste data inválida: ', invalidDate);

// // formato inválido
// console.log(invalidDate.format('a m d'));
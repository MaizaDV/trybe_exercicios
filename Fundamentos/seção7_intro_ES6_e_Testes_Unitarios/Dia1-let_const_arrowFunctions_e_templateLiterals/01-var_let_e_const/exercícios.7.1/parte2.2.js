// const longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'

//? sem sort()
// const lWord = (phrase) => {
//   const array = phrase.split(' ');
//   let word = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > word.length) {
//       word = array[i];
//     }
//   }
//   return word;
// }

// todo: com sort()
const lWord = (phrase) => phrase.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(lWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));
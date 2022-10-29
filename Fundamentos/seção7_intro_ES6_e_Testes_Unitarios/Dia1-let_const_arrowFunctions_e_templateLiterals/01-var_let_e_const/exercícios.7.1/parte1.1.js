// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

//?  teste sem operador ternário
// const teste = (escopo) => {
//   if (escopo) {
//     const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     return `${ifScope} ótimo, fui utilizada no escopo !`;
//   } else {
//     const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     return elseScope;
//   }
// }

// console.log(teste(true));

//?  teste com operador ternário
const teste = escopo => {
  const ifScope = (escopo) ? 'Não devo ser utilizada fora do meu escopo (if)' : `Não devo ser utilizada fora do meu escopo (else)`;
  return ifScope;
}

console.log(teste(false));

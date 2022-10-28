const saudacoes = ['Olá', (saudacao) => saudacao];

console.log(saudacoes[1](saudacoes[0])); // Olá

console.log('=> ---------------------');
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [ first, second] = saudacoes;

console.log(first, second('pessoa!'));

console.log('=> ---------------------');
// outro modo de fazer!
const [saudacao, realizaSaudacao] = saudacoes;

console.log(realizaSaudacao(saudacao)); // Olá

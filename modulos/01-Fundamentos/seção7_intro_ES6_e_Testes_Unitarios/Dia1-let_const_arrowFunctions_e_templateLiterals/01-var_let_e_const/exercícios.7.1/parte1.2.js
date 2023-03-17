const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
// Seu código aqui.
  oddsAndEvens.sort((a, b) => a - b); // ordena de forma crescente, se colocar b - a, ordena de forma decrescente
  return `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
}
console.log(sortOddsAndEvens()); // será necessário alterar essa linha 😉

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
// Seu código aqui.
  return oddsAndEvens.sort((a, b) => b - a); // ordena de forma decrescente, se colocar a - b, ordena de forma crescente
}
console.log(sortOddsAndEvens()); // será necessário alterar essa linha 😉

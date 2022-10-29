const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

//? Como você pode perceber, ao aplicar o Object.entries no nosso objeto, o retorno foi um array de arrays, onde a primeira entrada de cada array é a chave do objeto em formato de string, e o segundo valor é seu respectivo valor, que pode ser uma string ou outro tipo de dado, como por exemplo o número de temporadas do exemplo, que é um number.
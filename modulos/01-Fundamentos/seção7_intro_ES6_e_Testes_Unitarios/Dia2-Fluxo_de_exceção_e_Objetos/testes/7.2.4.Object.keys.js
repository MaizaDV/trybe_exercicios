const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(property); //pega a chave do objeto
//   console.log(coolestTvShow[property]); //pega o valor do objeto
}

console.log(Object.keys(coolestTvShow)); //retorna um array com as chaves do objeto
//?Cada entrada do array retornado será uma string com o valor de cada chave do objeto. Um array de strings
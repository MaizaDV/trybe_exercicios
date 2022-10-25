const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

for (const property in coolestTvShow) {
//   console.log(property); //pega a chave do objeto
  console.log(coolestTvShow[property]); //pega o valor do objeto
}

console.log(Object.values(coolestTvShow)); //retorna um array de strings, com os valores do objeto

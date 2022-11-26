import React from 'react';
import './App.css';

const data = {
  name: 'Jhon Connor',
  module: 'Front-end',
  bornIn: 1989,
  watchedMovies: [
    { title: 'Titanic', release: 2000, favorite: true },
    { title: 'Terminator Salvation', release: 2009, favorite: true },
    { title: 'The Lord of The Rings', release: 2002, favorite: true },
    { title: 'Helloween Kills', release: 2022, favorite: false },
  ],
};

// D E S A F I O

//* exibir todos os dados acima na tela (name, module, bornIn, watchedMovies)
//* exibir apenas os dados referentes aos filmes favoritados (favorite === true)
//* se o ano de nascimento for <= 2004 o nome da pessoa deve ficar verde, senão vermelho

class App extends React.Component {
  render() {
    const { name, module, bornIn, watchedMovies } = data;
    // console.log(watchedMovies.map(({title}) => title));
    return (
      <div>
        <p style={{ color: name <= 2004 ? 'green' : 'red' }}>Nome: {name}</p>
        <p>Módulo: {module}</p>
        <p>Nascimento: {bornIn}</p>
        <p>Filmes: {watchedMovies.map(({title}) => `${title}. `)}</p>
        <ul>Filmes favoritos:
          {/* não consegui fazer com outra hof, somente usando o map */}
          {watchedMovies.map((element) => (
            <li key={element.title}>{(element.favorite === true) ? element.title:null}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

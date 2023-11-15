// Para importar um arquivo que está dentro do próprio projeto ou que esteja em uma biblioteca externa;
// => O myImport é a variável pela qual você acessará o módulo importado.
import myImport from 'file';

// Caso você queira importar algo que não seja a exportação default, será necessário colocar o nome do que está sendo importado entre chaves:
import { myImport } from 'file';

// A origem do arquivo importado é indicada após o from, e pode ser um caminho relativo ou o nome da biblioteca que foi instalada no projeto:
import React from 'react' // importando de uma biblioteca
import Header from './components/Header.js.js.js' // importando de um caminho relativo

// A utilização de CSS (estilização) em componentes React não é nada muito diferente de como é feito no HTML, você deve criar um arquivo para manter todo o seu CSS e então deverá importá-lo onde você deseja utilizá-lo e colocar as classes e ids que você criou nos elementos da sua página.

// => exemplo (usado na pasta 04-react-dom-elements):
/* caminho 04-react-dom-elements/src/App.css */
/* .App {
  background-color: #282c34;
  text-align: center;
} */

// caminho 04-react-dom-elements/src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;

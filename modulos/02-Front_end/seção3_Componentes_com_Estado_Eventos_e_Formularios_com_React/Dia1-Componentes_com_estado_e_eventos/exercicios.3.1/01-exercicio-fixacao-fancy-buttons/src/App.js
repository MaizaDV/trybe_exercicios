import React, { Component } from 'react';
import './App.css';
import ButtonClass from './components/ButtonClass';
import texts from './components/Texts';

class App extends Component {

  handleClick = (text) => {
    console.log(text);
  };

  render() {
    return (
      <>
        {/* === Método Simples ===
        <ButtonClass text='Clickado 1' />
        <ButtonClass text='Clickado 2' />
        <ButtonClass text='Clickado 3' /> */}

        {texts.map((text) => (
          <ButtonClass
            functionClickado={ this.handleClick }
            key={ text } text={text}
          />
        ) )}
      </>
    );
  }
}

export default App;

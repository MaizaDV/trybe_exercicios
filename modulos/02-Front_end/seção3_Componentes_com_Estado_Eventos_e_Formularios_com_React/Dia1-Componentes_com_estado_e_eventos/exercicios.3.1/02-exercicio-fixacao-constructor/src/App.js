import React, { Component } from 'react';
import './App.css';
import ButtonClass from './components/ButtonClass';
import texts from './components/Texts';

class App extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (text) => {
    console.log(`"this" do ${ text } :`, this);
  };

  render() {
    return (
      <>
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

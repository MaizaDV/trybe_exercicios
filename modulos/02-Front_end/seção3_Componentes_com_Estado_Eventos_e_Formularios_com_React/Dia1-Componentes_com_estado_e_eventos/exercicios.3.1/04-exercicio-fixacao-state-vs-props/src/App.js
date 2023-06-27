import React, { Component } from 'react';
import './App.css';
import texts from './Texts';

class App extends Component {

  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    };
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  // ...
  handleClick1() {
    console.log(`"this" do ${ texts[0] } :`, this);

    const { clicksBtn1 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      clicksBtn1: estadoAnterior.clicksBtn1 + 1,
    }),
      () => {
        console.log(`Botão 1 ${this.getButtonColor(clicksBtn1 - 1)}`);
      });
  }

  handleClick2() {
    console.log(`"this" do ${ texts[1] } :`, this);

    const { clicksBtn2 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      clicksBtn2: estadoAnterior.clicksBtn2 + 1,
    }),
      () => {
        console.log(`Botão 2 ${this.getButtonColor(clicksBtn2 - 1 )}`);
      });
  }

  handleClick3() {
    console.log(`"this" do ${ texts[2] } :`, this);

    const { clicksBtn3 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      clicksBtn3: estadoAnterior.clicksBtn3 + 1,
    }),
      () => {
        console.log(`Botão 3 ${this.getButtonColor(clicksBtn3 - 1)}`);
      });
  }
// ...

  render() {
    const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
    return (
      <>
        <button
          onClick={ this.handleClick1 }
          style={ { backgroundColor: this.getButtonColor(clicksBtn1) } }
        >
          {`Cliques botão 1: ${ clicksBtn1 }`}
        </button>
        <button
          onClick={ this.handleClick2 }
          style={ { backgroundColor: this.getButtonColor(clicksBtn2) } }
        >
          {`Cliques botão 2: ${ clicksBtn2 }`}
        </button>
        <button
          onClick={ this.handleClick3 }
          style={ { backgroundColor: this.getButtonColor(clicksBtn3) } }
        >
          {`Cliques botão 3: ${ clicksBtn3 }`}
        </button>
      </>
    );
  }
}

export default App;

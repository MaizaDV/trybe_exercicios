import React, { Component } from 'react';
import '../App';

class BindComArrowFunction extends Component {
  handleClick = () => {
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão, bind com arrow function</button>
  }
}

export default BindComArrowFunction;

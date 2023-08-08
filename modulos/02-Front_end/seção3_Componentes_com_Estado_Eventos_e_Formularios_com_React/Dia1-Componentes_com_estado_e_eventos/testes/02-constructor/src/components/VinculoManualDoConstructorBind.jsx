import React, { Component } from 'react';
import '../App';

class VinculoManualDoConstructorBind extends Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão, bind</button>
  }
}

export default VinculoManualDoConstructorBind;

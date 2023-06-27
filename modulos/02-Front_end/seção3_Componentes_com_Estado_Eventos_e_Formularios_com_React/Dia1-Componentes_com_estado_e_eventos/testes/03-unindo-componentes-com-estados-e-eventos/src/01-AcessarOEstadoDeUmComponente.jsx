import React from 'react';
import './App.css';

class AcessarOEstadoDeUmComponente extends React.Component {
  constructor() {
    super();
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state` */
    this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React */
    this.setState({
      numeroDeCliques: 1,
    });
  }

  render() {
    /* Para LER o estado, você pode usar `this.state.chaveDoMeuEstado` */
    const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        { numeroDeCliques }
      </button>
    );
  }
}

export default AcessarOEstadoDeUmComponente;

import React, { Component } from 'react';
import '../App'

class AcessandoFuncaoNaClasse extends Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button
              type="button"
              onClick={this.handleClick}
              className='fancy-button'
            >Meu botão
          </button>;
  }
}

export default AcessandoFuncaoNaClasse;

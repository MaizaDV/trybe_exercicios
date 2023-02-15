import React, { Component } from 'react';
import '../App';

class EstadoFavorito extends Component {
  render () {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 120) error = "Texto muito grande!";
    console.log(`Estou no filho com o valor ${value}`);
    return (
      <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você quem sabe! =)
        <textarea
          name="estadoFavorito"
          value={ value }
          onChange={ handleChange }
        />
        <span>{ error ? error : '' }</span>
    </label>
    );
  }
};

export default EstadoFavorito;

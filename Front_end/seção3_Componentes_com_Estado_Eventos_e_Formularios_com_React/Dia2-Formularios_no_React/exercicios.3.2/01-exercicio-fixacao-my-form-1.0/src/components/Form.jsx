import React, { Component } from 'react'
import '../App'

class Form extends Component {

  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      jogoFavorito: '',
      nome: '',
      email: '',
      generoFavorito: '',
    }
  }

  handleTextAreaChange(event) {
    this.setState({ jogoFavorito: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Exercício de Fixação - Componentes controlados</h1>
        <form  className="form">

          <label>
            Escolha seu gênero de jogo favorito:
            <select name="generoFavorito">
              <option value="rpg" >RPG</option>
              <option value="fps" >FPS</option>
              <option value="moba" >MOBA</option>
              <option value="mmorpg" >MMORPG</option>
            </select>
          </label>

          <label>
            Nome
            <input name="nome" type="text" />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={ this.state.email }
              onChange={ this.handleEmailChange }
            />
          </label>

          <label>
            Me diga seu jogo favorito! Você escolhe :)
            <textarea
              name="jogoFavorito"
              value={ this.state.jogoFavorito }
              onChange={ this.handleTextAreaChange }
            />
          </label> 

        </form>
      </div>
    );
  }
}

export default Form;

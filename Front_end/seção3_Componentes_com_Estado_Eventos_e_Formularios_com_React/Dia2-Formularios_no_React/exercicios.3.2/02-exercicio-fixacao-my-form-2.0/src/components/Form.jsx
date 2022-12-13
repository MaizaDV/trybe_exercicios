import React, { Component } from 'react'
import '../App'

class Form extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      jogoFavorito: '',
      nome: '',
      email: '',
      generoFavorito: '',
      likedGames: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { jogoFavorito, nome, email, generoFavorito, likedGames } = this.state;
    return (
      <div>
        <h1>Exercício de Fixação - Event handlers genéricos</h1>
        <form  className="form">

          <label>
            Escolha seu gênero de jogo favorito:
            <select
              name="generoFavorito"
              value={ generoFavorito }
              onChange={ this.handleChange }
            >
              <option value="rpg" >RPG</option>
              <option value="fps" >FPS</option>
              <option value="moba" >MOBA</option>
              <option value="mmorpg" >MMORPG</option>
            </select>
          </label>

          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={ nome }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Me diga seu jogo favorito! Você escolhe :)
            <textarea
              name="jogoFavorito"
              value={ jogoFavorito }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Gosta de jogos?
            <input
              name="likedGames"
              type="checkbox"
              value={ likedGames }
              onChange={ this.handleChange }
            />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;

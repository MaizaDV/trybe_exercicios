import React, { Component } from 'react'
import '../App'
import Email from './Email';
import Nome from './Nome';

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
      formularioComErros: true,
    }
  }

    handleError = () => {
      const { nome, email, generoFavorito, jogoFavorito, likedGames } = this.state;

      // Criamos um array com os dados obrigatórios.
      // Note que estamos usando a propriedade length.
      // Caso o length seja 0, então !campo.length será
      // true
      const errorCases = [
        !nome.length,
        !email.match(/^\S+@\S+$/i),
        !generoFavorito.length,
        !jogoFavorito.length,
        !likedGames,
      ];

      // Caso haja algum campo que não seja true,
      // formularioPreenchido estará como false
      const formularioPreenchido = errorCases.every((error) => error !== true);

      this.setState({
        // Armazenamos o valor inverso no nosso estado
        // para sabermos se o formulário possui erros
        formularioComErros: !formularioPreenchido,
      });
    } 

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
      // Após alterarmos o estado, chamamos a função que
       // verificará os erros.
    }, this.handleError);
  }

  render() {
    const { jogoFavorito, nome, email, generoFavorito, likedGames, formularioComErros } = this.state;
    return (
      <div>
        <h1>Exercício de Fixação - Event handlers genéricos</h1>
        <form  className="form">
          <fieldset className="form">
          <legend>Informações pessoais</legend>
            <Nome
              value={ nome }
              handleChange={ this.handleChange }
              error={ formularioComErros }
            />
            <Email
              value={ email }
              handleChange={ this.handleChange }
            />
          </fieldset>

          <fieldset className="form">
            <legend>Escolhas do usuário</legend>
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
          </fieldset>

          <fieldset className="form">
            <legend>Arquivo</legend>
            <label>
              Adicione um arquivo:
              <input
                name="arquivo"
                type="file"
                />
            </label>
          </fieldset>
        </form>
        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;

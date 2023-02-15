import React, { Component } from 'react'
import '../App'
import Btn from './Btn';
import EstadoFavorito from './EstadoFavorito';

class Form extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }

  handleChange({ target }) {
    console.log('Estou mudando o estado do pai!');
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form  className="form">
          <EstadoFavorito
            value={this.state.estadoFavorito}
            handleChange={this.handleChange}
          />
          <label>
            Email
            <input
              name="email"
              type="email"
              value={ this.state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={ this.state.nome }
              onChange={ this.handleChange }
            />
          </label>
        </form>

        <label>
          Idade
          <input
            name="idade"
            type="number"
            value={ this.state.idade }
            onChange={ this.handleChange }
          />
        </label>

        <label>
          Vai comparecer à conferência?
          <input
            name="vaiComparecer"
            type="checkbox"
            value={ this.state.vaiComparecer }
            onChange={ this.handleChange }
          />
        </label>

        <label>
          Escolha sua palavra chave favorita:
          <select name="palavraChaveFavorita">
            <option value="estado" >Estado</option>
            <option value="evento" >Evento</option>
            <option value="props" >Props</option>
            <option value="hooks" >Hooks</option>
          </select>
        </label>

        <Btn />
      </div>
    );
  }
}

export default Form;


//  Estamos dizendo aqui que o elemento do formulário é um componente controlado. Ou seja, não estamos falando dos componentes React aqui, mas sim dos elementos que compõem o formulário! 

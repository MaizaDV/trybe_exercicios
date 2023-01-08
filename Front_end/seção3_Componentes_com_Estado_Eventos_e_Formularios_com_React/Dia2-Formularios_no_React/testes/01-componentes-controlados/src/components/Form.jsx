import React, { Component } from 'react'
import '../App'

class Form extends Component {

  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }

  handleTextAreaChange(event) {
    this.setState({ estadoFavorito: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form  className="form">
{/* componente controlado */}
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você quem sabe! =)
              <textarea
                name="estadoFavorito"
                value={ this.state.estadoFavorito }
                onChange={ this.handleTextAreaChange }
              />
          </label> 
{/* componente controlado */}

{/* componentes não controlados */}
          <label>
            Email
            <input name="email" type="email" />
          </label>

          <label>
            Nome
            <input name="nome" type="text" />
          </label>
        </form>

        <label>
          Idade
          <input name="idade" type="number"
          />
        </label>

        <label>
          Vai comparecer à conferência?
          <input
            name="vaiComparecer"
            type="checkbox"
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
{/* componentes não controlados */}

      </div>
    );
  }
}

export default Form;


//  Estamos dizendo aqui que o elemento do formulário é um componente controlado. Ou seja, não estamos falando dos componentes React aqui, mas sim dos elementos que compõem o formulário! 

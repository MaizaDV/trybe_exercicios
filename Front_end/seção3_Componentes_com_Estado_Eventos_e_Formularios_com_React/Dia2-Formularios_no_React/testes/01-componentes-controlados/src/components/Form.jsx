import React, { Component } from 'react'
import '../App'

class Form extends Component {

  render() {
    return (
      <div className="form">
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você quem sabe! =)
              <textarea
                name="estadoFavorito"
              />
          </label>

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
      </div>
    );
  }
}

export default Form;

import './App.css';
import React, { Component } from 'react';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value })
  }

  changeSaveEmail(value) {
    this.setState({ email: '', saveEmail: value }) 
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className='App'>
        <label htmlFor='id-email'>
          Email
          <input 
            id='id-email'
            value={ email }
            type='email'
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
          <input 
            id='btn-enviar'
            type='button'
            value='Enviar'
            data-testid='id-send'
            onClick={ () => this.changeSaveEmail(email) }
          />
          <input id='btn-id' type='button' value='Voltar' />
          {/* <h2 data-testid='id-email-user'>{ `Valor: ${saveEmail}` }</h2> */}
          <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;

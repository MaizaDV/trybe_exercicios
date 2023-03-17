import React, { Component } from 'react';
import './App.css'
import AcessandoFuncaoNaClasse from './components/AcessandoFuncaoNaClasse';
import BindComArrowFunction from './components/BindComArrowFunction';
import ErroDoThis from './components/ErroDoThis';
import LogNoThis from './components/LogNoThis';
import UsandoConstructor from './components/UsandoConstructor';
import VinculoManualDoConstructor from './components/VinculoManualDoConstructorBind';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <AcessandoFuncaoNaClasse />
        <UsandoConstructor />
        <LogNoThis />
        <ErroDoThis />
        <VinculoManualDoConstructor />
        <BindComArrowFunction />
      </div>
    );
  }
}

export default App;

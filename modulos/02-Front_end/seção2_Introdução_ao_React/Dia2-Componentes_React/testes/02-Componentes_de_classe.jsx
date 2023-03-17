/*  => Componentes de classe:
Componentes de classe são componentes criados através de uma classe que estende a classe React.Component. */

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

export default Greeting;

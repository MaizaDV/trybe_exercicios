/*  => Componentes de função:
Componentes de função, ou funcionais, são componentes criados apenas com uma função javascript. */

function Greeting(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}

export default Greeting;

/*  => Componentes de classe:
Componentes de classe são componentes criados através de uma classe que estende a classe React.Component. */

import React from 'react';

class Greeting2 extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

export default Greeting2;

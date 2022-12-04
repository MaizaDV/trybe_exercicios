/* => Componente Greeting:

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting; */

// => Visando seguir as boas práticas nas suas aplicações, você pode desestruturar as props. Para isso, basta refatorar o código anterior, no qual o componente Greeting ficará da seguinte forma:

import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name, lastName } = this.props;
    return <h1>Hello, {name} {lastName}</h1>;
  }
}

export default Greeting;

/* vamos analisar com mais cuidado a linha 06 e 18 do código anterior. Ao atribuir as props name e lastName ao componente Greeting, o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente montado numa variável chamada props, em um formato parecido com esse:

const props = { name: 'Samuel', lastName: 'Silva' }

Esse objeto props, por sua vez, é passado para o componente Greeting, o qual poderá resgatar tanto o nome como o sobrenome por meio do this.props.name e this.props.lastName.
 */

// => Greeting usada no arquivo App.js

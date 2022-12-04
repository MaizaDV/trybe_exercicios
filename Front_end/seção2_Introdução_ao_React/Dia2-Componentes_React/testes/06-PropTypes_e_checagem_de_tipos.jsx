import React, { Component } from 'react';

// O primeiro passo para utilizar o prop-types é importá-lo no componente:
import PropTypes from 'prop-types';

class Greeting extends Component {
  render() {
    const { name, lastName } = this.props;
    return (<h1>Hello, {name} {lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

// Desse modo, sempre que o componente for renderizado sem uma das props ou com alguma do tipo errado, um aviso será disparado.

export default Greeting;

import React, { Component } from "react";
import PropTypes from 'prop-types'; 

class Card extends Component {
  render() {
    const { person: { name, email, age, image } } = this.props;
    return(
      <div>
        <img src={ image } alt={ image } />
        <h1>Nome: { name }</h1>
        <h3>Idade: { age }</h3>
        <p>E-mail: { email }</p>
      </div>
    );
  }
}

Card.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
}

export default Card;

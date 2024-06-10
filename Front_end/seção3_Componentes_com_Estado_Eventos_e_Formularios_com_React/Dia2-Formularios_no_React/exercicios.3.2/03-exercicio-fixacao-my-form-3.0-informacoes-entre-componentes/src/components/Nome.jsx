import React, { Component } from 'react';
import '../App';
import PropTypes from 'prop-types';

class Nome extends Component {
  render () {
    const { value, handleChange } = this.props;
    const LIMIT_CARACTERES = 80;

    
    return (
      <label>
        Nome
        <input
            id="nome"
            name="nome"
            type="text"
            value={ value }
            onChange={ handleChange }
          />
            { !value ? 'O nome precisa ser preenchido' : ''}
            { value.length > LIMIT_CARACTERES ? 'O nome não pode ter mais que 80 caracteres' : ''}
        </label>
    );
  }
};

Nome.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Nome;

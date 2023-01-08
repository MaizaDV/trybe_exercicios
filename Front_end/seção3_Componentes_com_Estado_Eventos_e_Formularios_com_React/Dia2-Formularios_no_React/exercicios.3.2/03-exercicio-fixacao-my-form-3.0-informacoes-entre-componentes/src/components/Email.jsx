import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App'

class Email extends Component {
  render () {
    const { value, handleChange } = this.props;
    return (
      <label>
        Email
        <input
          type="email"
          name="email"
          value={ value }
          onChange={ handleChange }
        />
        { !value ? 'O E-mail precisa ser preenchido!' : ''}
      </label>
    );
  }
};

Email.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Email;

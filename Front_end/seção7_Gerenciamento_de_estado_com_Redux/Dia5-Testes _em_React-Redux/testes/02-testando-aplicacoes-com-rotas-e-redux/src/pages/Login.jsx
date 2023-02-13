import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../redux/actions';

class Login extends React.Component {
  state = {
    userName: '',
    disabled: true,
  };

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      const { userName } = this.state;
      if (userName) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { userName, disabled } = this.state;
    const { dispatch } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(event) => this.handleChange(event)}
            placeholder="Digite seu nome"
          />
          <Link to="/profile">
            <button
              type="submit"
              disabled={disabled}
              onClick={() => dispatch(actionCreator(this.state))}
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default connect()(Login);

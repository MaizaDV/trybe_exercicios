import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    const { userName } = this.props;

    return (
      <div>
        {userName ? (
          <h1>Boas vindas, {userName}</h1>
        ) : (
          <h1>Você precisa realizar o login</h1>
        )}
        <Link to="/">
          <h3>Voltar</h3>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.userName,
  password: state.password,
});

export default connect(mapStateToProps)(Login);

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const { ship } = this.props.match.params;
    return (
      <>
        <Link to="/">Voltar à Home</Link>
        <h1>Meu perfil: {this.props.name}, do navio { ship } </h1>
      </>
    );
  }
}

export default Profile;

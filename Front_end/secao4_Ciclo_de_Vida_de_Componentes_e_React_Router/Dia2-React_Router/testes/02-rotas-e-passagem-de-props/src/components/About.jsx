import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <Link to="/">Voltar à Home</Link>
        <span>Se meu navio de React é o de Teseu e eu refatorei todos os seus componentes, ele ainda é o meu navio?</span>
      </>
    );
  }
}

export default About;

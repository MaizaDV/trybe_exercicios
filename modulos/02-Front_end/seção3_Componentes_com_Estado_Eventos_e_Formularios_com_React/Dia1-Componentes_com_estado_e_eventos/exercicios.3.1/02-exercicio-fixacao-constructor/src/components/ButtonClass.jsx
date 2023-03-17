import React, { Component } from "react";

class ButtonClass extends Component {

  render() {
    const { functionClickado, text } = this.props;

    return (
      <button className="fancy-button" onClick={ () => functionClickado(text) }>
        { text }
      </button>
    );
  }
}

export default ButtonClass;

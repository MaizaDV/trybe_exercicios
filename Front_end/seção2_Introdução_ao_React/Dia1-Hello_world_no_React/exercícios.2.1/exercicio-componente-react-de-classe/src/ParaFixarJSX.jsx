import React, { Component } from "react";

class ParaFixarJSX extends Component {
  render() {
    const textJSX = "Hello, JSX";
    const elementH1 = <h1>{textJSX}</h1>;
    return <div>{elementH1}</div>;
  }
}

export default ParaFixarJSX;

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("componentDidUpdate", this.state, prevState);
  }
// estado só é de fato atualizado quando chega no método componentDidUpdate. Por isso, caso seja necessário impedir uma renderização, você deve utilizar o método shouldComponentUpdate, que permite comparar os atuais e próximos estados ou props e adicionar a lógica.
  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;

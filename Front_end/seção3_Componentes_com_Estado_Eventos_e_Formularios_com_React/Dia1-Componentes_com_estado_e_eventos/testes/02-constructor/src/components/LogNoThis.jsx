import React, { Component } from 'react';
import '../App';

class LogNoThis extends Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default LogNoThis;

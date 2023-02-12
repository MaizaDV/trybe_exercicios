import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';
import './App.css';

class App extends React.Component {
  render() {
    const { dispatch, countState } = this.props;
    return (
      <div className="container">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
});

export default connect(mapStateToProps)(App);

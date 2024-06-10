// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import "./App.css"

import { fetchDogImage } from "./redux/actions";

class App extends React.Component {
  render() {
    const { isFetching, imageURL, dispatch } = this.props;

    if (isFetching) return <p>Carregando...</p>;

    return (
      <div>
        <button
          onClick={() => { dispatch(fetchDogImage()) }}
          type="button"
        >
          Novo Doguinho
        </button>
        {
          imageURL &&
          <img
            src={imageURL}
            alt="Imagem de um cachorro aleatório"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);

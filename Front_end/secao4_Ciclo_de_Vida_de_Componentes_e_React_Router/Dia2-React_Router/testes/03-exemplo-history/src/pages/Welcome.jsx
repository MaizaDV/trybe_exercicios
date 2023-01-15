import React from 'react';

class Welcome extends React.Component {
  render() {
    const { history } = this.props;
    const { location } = history;
    return (
      <>
        <h1>Boas vindas,</h1>
        <h2>
          {
            location.state ? location.state.userName : 'Pessoa desconhecida'
          }
        </h2>
        <button
          type="button"
          onClick={ () => console.log(history) }
        >
          History
        </button>
      </>
    );
  }
}

export default Welcome;

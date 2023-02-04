import React from 'react';
import { connect } from 'react-redux';
import { understandMatrix } from '../redux/actions';
import abstract from '../data';

class Matrix extends React.Component {
  render() {
    const { dispatch } = this.props;
    const bluePill =
      'https://content-assets.betrybe.com/prod/92881171-a5c8-4bb2-9f10-05ed823dd61e-matrix-blue-pill.png';
    const redPill =
      'https://content-assets.betrybe.com/prod/92881171-a5c8-4bb2-9f10-05ed823dd61e-matrix-red-pill.png';
    return (
      <div className="matrix-main">
        {abstract.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <h3>Escolha a sua pílula</h3>
        <div>
          <button
            className="pill"
            type="button"
            onClick={({ target }) => dispatch(understandMatrix(target.id))}
          >
            <img id="blue" src={bluePill} height="30px" alt="blue pill" />
          </button>
          <button
            className="pill"
            type="button"
            onClick={({ target }) => dispatch(understandMatrix(target.id))}
          >
            <img id="red" src={redPill} height="30px" alt="red pill" />
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Matrix);

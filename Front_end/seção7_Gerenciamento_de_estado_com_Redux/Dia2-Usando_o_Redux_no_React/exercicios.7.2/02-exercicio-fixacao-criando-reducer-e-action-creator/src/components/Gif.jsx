import React from 'react';
import { connect } from 'react-redux';

class Gif extends React.Component {
  render() {
    const { pill } = this.props;
    const neo =
      'https://content-assets.betrybe.com/prod/92881171-a5c8-4bb2-9f10-05ed823dd61e-neo-awakening.gif';
    const john =
      'https://content-assets.betrybe.com/prod/92881171-a5c8-4bb2-9f10-05ed823dd61e-neo-playing.gif';

    return (
      <div className="d-flex align-items-center justify-content-center">
        {pill === 'red' ? (
          <div className="matrix-main">
            <img src={neo} height="300px" alt="Neo Matrix" />
          </div>
        ) : (
          <div className="matrix-main">
            <img src={john} height="300px" alt="John Wick" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pill: state.id,
});

export default connect(mapStateToProps)(Gif);

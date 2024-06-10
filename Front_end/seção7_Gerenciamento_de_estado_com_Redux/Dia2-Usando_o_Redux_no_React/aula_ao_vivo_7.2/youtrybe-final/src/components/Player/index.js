import React from 'react';
import { connect } from 'react-redux';

import { updateFavoriteList } from '../../redux/actions';

import './player.css';

class Player extends React.Component {
  render() {
    const { movie, category, favoritesMovies, dispatch } = this.props;
    const isFavorite = favoritesMovies.includes(movie.id);

    return (
      <div className="player">
        {movie && (
          <>
            <div className="video-container">
              <iframe
                src={ `https://www.youtube.com/embed/${movie.embedId}` }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="movie-details">
              <div className="movie-infos">
                <h2>{movie.title}</h2>
                <p>
                  Released in
                  {' '}
                  {movie.released}
                </p>
                <p className="category">{category.name}</p>
              </div>
              <div className="movie-options">
                <button
                  type="button"
                  onClick={ () => dispatch(updateFavoriteList(movie.id)) }
                >
                  {isFavorite ? '😐 Remove from favorites' : '😍 Add to favorites'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  movie: globalState.movies.selectedMovie,
  category: globalState.movies.selectedCategory,
  favoritesMovies: globalState.favorites.favoritesMovies,
});

export default connect(mapStateToProps)(Player);

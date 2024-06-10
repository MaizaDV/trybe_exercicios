export const SELECT_MOVIE = 'SELECT_MOVIE';
export const UPDATE_FAVORITE_LIST = 'UPDATE_FAVORITE_LIST';

export const selectMovie = (movie, category) => ({
  type: SELECT_MOVIE,
  payload: {
    movie,
    category,
  },
});

export const updateFavoriteList = (movieId) => ({
  type: UPDATE_FAVORITE_LIST,
  payload: {
    movieId,
  },
});

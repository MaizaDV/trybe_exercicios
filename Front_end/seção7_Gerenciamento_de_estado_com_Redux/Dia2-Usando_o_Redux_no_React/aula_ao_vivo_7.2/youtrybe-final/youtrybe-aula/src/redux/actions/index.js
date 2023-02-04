export const SELECT_MOVIE = 'SELECT_MOVIE';

export const selectMovie = (movie, category) => ({
  type: SELECT_MOVIE,
  payload: {
    movie,
    category,
  },
});

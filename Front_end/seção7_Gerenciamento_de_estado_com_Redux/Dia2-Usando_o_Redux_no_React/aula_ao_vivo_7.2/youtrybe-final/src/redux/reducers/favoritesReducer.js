import { UPDATE_FAVORITE_LIST } from '../actions';

const INITIAL_STATE = {
  favoritesMovies: [],
};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_FAVORITE_LIST: {
    const { movieId } = action.payload;

    let updatedFavoritesList = [];
    if (state.favoritesMovies.includes(movieId)) {
      updatedFavoritesList = state.favoritesMovies
        .filter((movie) => movie !== movieId);
    } else {
      updatedFavoritesList = [...state.favoritesMovies, movieId];
    }

    return {
      ...state,
      favoritesMovies: updatedFavoritesList,
    };
  }

  default:
    return state;
  }
};

export default configReducer;

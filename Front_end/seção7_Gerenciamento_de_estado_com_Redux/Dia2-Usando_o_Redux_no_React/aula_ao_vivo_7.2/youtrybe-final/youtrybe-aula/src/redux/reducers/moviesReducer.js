import { SELECT_MOVIE } from '../actions';
import categories from '../../data';

const INITIAL_STATE = {
  categories: [...categories],
  selectedMovie: categories[0].movies[0],
  selectedCategory: categories[0],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedMovie: action.payload.movie,
      selectedCategory: action.payload.category,
    };
  default:
    return state;
  }
};

export default moviesReducer;

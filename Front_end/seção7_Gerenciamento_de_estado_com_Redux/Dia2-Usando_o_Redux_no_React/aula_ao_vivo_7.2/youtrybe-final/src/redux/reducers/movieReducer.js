import categories from '../../data';
import { SELECT_MOVIE } from '../actions';

const INITIAL_STATE = {
  categories: [...categories],
  selectedCategory: categories[0],
  selectedMovie: categories[0].movies[0],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  console.log('estou ouvindo: ', action);
  switch (action.type) {
  case SELECT_MOVIE: {
    return {
      ...state,
      selectedCategory: action.payload.category,
      selectedMovie: action.payload.movie,
    };
  }

  default:
    return state;
  }
};

export default movieReducer;

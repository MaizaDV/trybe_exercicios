import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import movieReducer from '../reducers/movieReducer';
import favoritesReducer from '../reducers/favoritesReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

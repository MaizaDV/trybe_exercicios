import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import moviesReducer from './reducers/moviesReducer';

// Para adicionar novos reducers, basta separar por vírgula, igual um objeto.
const rootReducer = combineReducers({ movies: moviesReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;

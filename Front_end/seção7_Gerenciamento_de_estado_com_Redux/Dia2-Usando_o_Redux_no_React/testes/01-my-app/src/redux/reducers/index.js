// ./src/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;

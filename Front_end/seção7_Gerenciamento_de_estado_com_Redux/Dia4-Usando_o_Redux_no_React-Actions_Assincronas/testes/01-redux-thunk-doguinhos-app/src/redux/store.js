// src/redux/index.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import dogReducer from './reducers/dogReducer';

const store = createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

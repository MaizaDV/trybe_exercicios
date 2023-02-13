import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import userReducer from './reducers/userReducer';

const store = createStore(userReducer, composeWithDevTools());

export default store;

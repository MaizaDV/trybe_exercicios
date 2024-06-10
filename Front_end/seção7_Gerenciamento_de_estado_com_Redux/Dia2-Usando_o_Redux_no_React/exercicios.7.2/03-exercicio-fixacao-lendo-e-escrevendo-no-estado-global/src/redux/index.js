import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import mutantReducer from './reducers/mutantReducer';

const store = createStore(mutantReducer, composeWithDevTools());

export default store;

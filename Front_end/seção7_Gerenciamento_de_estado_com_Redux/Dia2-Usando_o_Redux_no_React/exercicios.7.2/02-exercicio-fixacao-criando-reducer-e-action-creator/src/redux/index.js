import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import selectedPill from './reducers/pillChoice';

const store = createStore(selectedPill, composeWithDevTools());

export default store;

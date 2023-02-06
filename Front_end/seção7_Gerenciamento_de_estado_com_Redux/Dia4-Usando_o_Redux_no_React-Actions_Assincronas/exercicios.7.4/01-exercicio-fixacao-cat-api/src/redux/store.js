import { legacy_createStore as createStore } from 'redux';

import reducer from './reducers/gallery';

const store = createStore(reducer);

export default store;

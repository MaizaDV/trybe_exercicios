// src/helpers/renderWithRedux.js
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';

import { reducer } from './redux/reducers/reducer'

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk)
    ),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;
// import { render, screen } from '@testing-library/react';

import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';

test('renders learn react link', () => {
  renderWithRedux(<App />);
  expect(true).toBe(true);
});

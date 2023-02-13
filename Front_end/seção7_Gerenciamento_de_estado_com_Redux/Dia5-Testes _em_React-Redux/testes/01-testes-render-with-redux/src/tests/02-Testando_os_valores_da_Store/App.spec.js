import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRedux from '../helpers/renderWithRedux';
import App from '../../App';

test('Incrementa o valor da store ao clicar no botão', () => {
  const { store } = renderWithRedux(<App />);

  expect(screen.getByText('0')).toBeInTheDocument();

  const button = screen.getByText('Incrementa 1');
  userEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(1);
});

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const initialState = {
    counterReducer: {
      count: 10,
    },
  };
  renderWithRedux(<App />, { initialState });

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});

// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { legacy_createStore as createStore } from 'redux';
import userReducer from '../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(userReducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  history,
});

test('Ao acessar a rota /profile a partir da Home, o nome da pessoa deverá ser renderizado', () => {
  renderWithRouterAndRedux(<App />);

  const nameInput = screen.getByRole('textbox');
  expect(nameInput).toBeInTheDocument();
  userEvent.type(nameInput, 'Tryber');
  expect(nameInput.value).toBe('Tryber');

  const loginButton = screen.getByRole('button');
  userEvent.click(loginButton);

  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});

test('Ao acessar diretamente a rota /profile, o nome da pessoa não pode ser renderizado', () => {
  const initialEntries = ['/profile'];

  renderWithRouterAndRedux(<App />, { initialEntries });

  expect(screen.queryByText('Boas vindas')).not.toBeInTheDocument();
  expect(screen.getByText('Você precisa realizar o login')).toBeInTheDocument();
});

test('Ao acessar diretamente a rota /profile e alterando o estado global, o nome da pessoa deve ser renderizado', () => {
  const initialEntries = ['/profile']
  const initialState = { userName: 'Tryber' }

  renderWithRouterAndRedux(<App />, { initialState, initialEntries });

  expect(screen.queryByText('Você precisa realizar o login')).not.toBeInTheDocument();
  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});

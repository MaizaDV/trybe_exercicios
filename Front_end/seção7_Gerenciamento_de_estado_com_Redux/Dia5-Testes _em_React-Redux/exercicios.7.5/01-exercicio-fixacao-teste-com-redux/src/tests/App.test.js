import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';

describe('Verifica o clique dos botões', () => {
  it('Com o valor padrão do reducer e teste se o clique dos botões incrementa corretamente o valor do estado global.', () => {
    renderWithRedux(<App />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons.length).toBe(2);

    const valor = screen.getByRole('heading', {  name: /0/i});
    expect(valor).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();

    const btn1 = screen.getByRole('button', {  name: /incrementa 1/i});
    expect(btn1).toBeInTheDocument();
    userEvent.click(btn1);
    expect(screen.getByRole('heading', {  name: /1/i})).toBeInTheDocument();
    userEvent.click(btn1);
    expect(screen.getByRole('heading', {  name: /2/i})).toBeInTheDocument();

    const btn2 = screen.getByRole('button', {  name: /incrementa 5/i});
    expect(btn2).toBeInTheDocument();
    userEvent.click(btn2);
    expect(screen.getByRole('heading', {  name: /7/i})).toBeInTheDocument();
    userEvent.click(btn2);
    expect(screen.getByRole('heading', {  name: /12/i})).toBeInTheDocument();

  });
});

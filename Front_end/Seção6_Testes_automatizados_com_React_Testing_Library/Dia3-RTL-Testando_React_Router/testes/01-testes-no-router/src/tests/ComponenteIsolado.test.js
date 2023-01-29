import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App, { About } from '../App';

describe('Testando componentes isoladamente', () => {
  it('Deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início' });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Verifica se renderiza o componente About', () => {
    const { history } = renderWithRouter(<App />);

    const linkToAbout = screen.getByRole('link', { name: /sobre/i });
    expect(linkToAbout).toBeDefined();

    // console.log(history );
    
    userEvent.click(linkToAbout);
    const titleAbout = screen.getByRole('heading', { level:1, name: 'Você está na página Sobre' });
    expect(titleAbout).toBeInTheDocument();

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });
  it('Deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' })
    expect(aboutTitle).toBeInTheDocument();
  });
});

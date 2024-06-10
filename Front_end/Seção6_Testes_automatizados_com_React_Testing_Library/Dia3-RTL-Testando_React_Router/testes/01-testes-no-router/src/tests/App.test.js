import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Deve renderizar o componente sobre', () => {
    const { history } = renderWithRouter(<App />);

    // procura o link e espera que esteja no documento
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();

    // clica no link e espera que o histórico local(history.location.pathname) tenha o caminho do link clicado  
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    // espera que depois de mudar de página, tenha as renderizações certas do caminho
    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => { history.push('/pagina/que-nao-existe/') });

    const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(() => jest.clearAllMocks());
describe('Exercício de fixação', () => {
  it('Testa se, ao renderizar a página, a primeira piada é exibida na tela e se a função fetch é chamada uma vez', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(joke),
    }));

    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);

  });

  it('Testa se, ao clicar no botão “New joke”, uma nova piada é exibida na tela', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    const joke2 = {
      id: 'xXSv492wPmb',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke),
    });

    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    const btn = screen.getByRole('button', {  name: /new joke/i});

    expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
    });

    userEvent.click(btn);

    expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
    expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(2);

  });
});
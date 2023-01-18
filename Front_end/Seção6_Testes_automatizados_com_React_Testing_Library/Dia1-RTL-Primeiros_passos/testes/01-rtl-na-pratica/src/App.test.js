import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input do tipo email na tela', () => {
  // acessar os elementos da tela
  render(<App />) // a função render() recebe qual componente vai ser renderizado
  const inputEmail = screen.getByLabelText("Email");

  // fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");

});

  // todos os testes seguem mais ou menos essas etapas:
  // acessar os elementos da tela

  // interagir como os elementos (se for necessário)

  // fazer os testes
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
  expect(inputEmail).toHaveProperty('type', 'email');

});

test('Verifica se existe dois botões na tela', () => {
  // acessar os elementos da tela
  render(<App />);
  const buttons = screen.getAllByRole("button");

  // fazer os testes
  expect(buttons).toHaveLength(2);;
});

test('Verifica se existe o botão de enviar', () => {
  // acessar os elementos da tela
  render(<App />);
  const button = screen.getByTestId("id-send");

  // fazer os testes
  expect(button).toBeInTheDocument();
  expect(button).toHaveProperty("type", "button");
  expect(button).toHaveValue("Enviar");
});

  // todos os testes seguem mais ou menos essas etapas:
  // acessar os elementos da tela

  // interagir como os elementos (se for necessário)

  // fazer os testes
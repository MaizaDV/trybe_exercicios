import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Tela de inserção de email', () => {
  it('Verifica se existe um input do tipo email na tela', () => {
    // acessar os elementos da tela
    render(<App />) // a função render() recebe qual componente vai ser renderizado
    const inputEmail = screen.getByLabelText("Email");

    // fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
    expect(inputEmail).toHaveProperty('type', 'email');

  });

  it('Verifica se existe dois botões na tela', () => {
    // acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole("button");

    // fazer os testes
    expect(buttons).toHaveLength(2);;
  });

  it('Verifica se existe o botão de enviar', () => {
    // acessar os elementos da tela
    render(<App />);
    const button = screen.getByTestId("id-send");

    // fazer os testes
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty("type", "button");
    expect(button).toHaveValue("Enviar");
  });

  it('Verifica que, ao digitar o email e clicar em "Enviar", o email é renderizado', () => {
    // acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("id-send");
    const userEmail = screen.getByTestId("id-email-user");

    // interagir com os elementos (se for necessário)
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(button);

    // fazer os testes
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Valor: teste@teste.com");

    // teste 2
    const EMAIL_USER = 'email@email.com';
    
    // acessar os elementos da tela
    const textEmail = screen.getByTestId('id-email-user');

    // fazer os testes
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    // acessar os elementos da tela
    const btnSend = screen.getByTestId('id-send');
    const inputEmail2 = screen.getByLabelText('Email');

    // interagir com os elementos (se for necessário)
    userEvent.type(inputEmail2, EMAIL_USER);
    userEvent.click(btnSend);
    
    // fazer os testes
    expect(inputEmail2).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);

  });

});

  // todos os testes seguem mais ou menos essas etapas:
  // acessar os elementos da tela

  // interagir como os elementos (se for necessário)

  // fazer os testes
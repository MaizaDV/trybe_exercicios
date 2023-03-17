import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Testando apenas um componente', () => {
  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';

    // acessar os elementos da tela
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');

    // fazer os testes
    expect(isValid).toBeInTheDocument();
  });


  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';

    // acessar os elementos da tela
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');

    // fazer os testes
    expect(isValid).toBeInTheDocument();
  });

});


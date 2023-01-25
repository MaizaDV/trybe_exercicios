# Exercício de Fixação - Mocks e Inputs

## **Proposta**

Este exercício de fixação irá utilizar o código do nosso gerador de piadas que vimos na seção anterior. Antes de começar os testes, vamos adicionar uma nova funcionalidade em nossa aplicação de piada que estávamos fazendo:

crie um botão chamado “New Joke” que, ao ser clicado, faça uma nova requisição para API e renderize na tela uma nova piada.
Com essa nova funcionalidade criada, escreva um teste para verificar os seguintes comportamentos:

-ao renderizar a página, a primeira piada é exibida na tela;

-a função fetch foi chamada uma vez;

-ao clicar no botão “New joke”, uma nova piada é exibida na tela;

-a primeira piada não é mais exibida na tela;

-a função fetch foi chamada 2 vezes.

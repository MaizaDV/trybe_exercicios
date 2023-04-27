# Exercícios - bônus

1 - Crie um código que exiba o valor dos `n` primeiros elementos da `sequência de Fibonacci`. ✅

A sequência de Fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.

- Armazene o código no arquivo `fibonacci.js`.
- Utilize o `readline-sync` para realizar o input de dados.
- O código deve ser acionado através do comando `npm run fibonacci`.
- Não imprima o valor 0, uma vez que ele não está incluso na sequência.
- Quando `n = 10`, exatamente 10 elementos devem ser exibidos.
- Adicione validações para garantir que o valor informado é um inteiro maior que 0.

2 - Crie uma função que recebe três parâmetros e retorna uma Promise. ✅

- Caso algum dos parâmetros recebidos não seja um número, rejeite a `Promise` com o motivo `"Informe apenas números"`.
- Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro `((a + b) * c)`.
- Caso o resultado seja `menor que 50`, rejeite a Promise com o motivo `"Valor muito baixo"`.
- Caso o resultado seja `maior que 50`, resolva a Promise com o valor obtido.

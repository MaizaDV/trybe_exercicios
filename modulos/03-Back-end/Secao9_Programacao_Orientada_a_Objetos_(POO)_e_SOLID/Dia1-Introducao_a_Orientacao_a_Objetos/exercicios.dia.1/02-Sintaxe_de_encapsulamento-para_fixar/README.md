# Para Fixar
Utilizando o mesmo código dos exercícios de fixação anteriores:

1 - Altere a visibilidade dos atributos definidos na `classe Tv` para `private`.

2 - Crie um método `getter` e um `setter` para o atributo `_connectedTo`, da `classe Tv`.

O `setter` deverá verificar se o valor definido está entre as conexões disponíveis (`_connections`) e:

- Em caso positivo, definir este valor para o atributo `_connectedTo`;
- Em caso negativo, imprimir no `console` a mensagem `“Sorry, connection unavailable!”`

3 - Defina um valor para o atributo `_connectedTo` por meio do método `setter` criado e imprima seu valor.


Para executá-lo com o ts-node, é possível utilizar como um executável com npx.

  comando =>
  ```bash
  npx ts-node 01-exercicio.ts
  ```

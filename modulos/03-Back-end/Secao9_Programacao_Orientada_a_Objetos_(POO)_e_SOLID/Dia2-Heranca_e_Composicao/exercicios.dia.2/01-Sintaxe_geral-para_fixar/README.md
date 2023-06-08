  # Para fixar:
Que tal exercitar a sintaxe um pouco, com um breve exercício bem simples?

1 - Crie uma `classe` chamada `Superclass`.

- A `Superclass` deve possuir um atributo público `isSuper`
- `isSuper` deve ser setado como `true` na inicialização.
- A `Superclass` deve possuir um **método público** chamado `sayHello`, que deve imprimir `“Olá mundo!”`.

2 - Crie uma `classe` chamada `Subclass` que herda da `Superclass`.

3 - Crie uma `função myFunc` fora do escopo da `Subclass` que recebe um objeto da `Superclass`.

- Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
- Crie um objeto da `Superclass` e outro da `Subclass`.

4 - Chame a `função myFunc` 2 vezes, passando os objetos criados.

# Para fixar - Atributos protegidos:
Com base no exemplo do exercício anterior:

1 - Comente a criação da instância da `Superclass`.

2 - Comente a chamada da função que recebe o objeto do tipo `Superclass` como argumento.

3 - Faça a função receber não mais um objeto da `Superclass`, mas sim da `Subclass`.

4 - Crie, na `Subclass`, um `método público` chamado `sayHello2`.

5 - Chame o método sayHello dentro do método `sayHello2`.

6 - Mude a visibilidade do `método sayHello` de `public` para `protected`.
- Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método `sayHello2`.

7 - Mude a visibilidade do método sayHello de `protected` para private. O que acontece?

**Obs**: Desfaça estas alterações antes de fazer o próximo exercício, ou seja, deixe como estava ao final do primeiro exercício.


# Para fixar - Super:
Com base no final do primeiro exercício de fixação:

1 - No construtor da `Subclass`, o atributo `isSuper` deve ser setado como false. Você vai precisar utilizar o super.

2  - Dentro da função que recebe um objeto da `Superclass` como parâmetro, cheque o valor do atributo `isSuper` e imprima no console `“Super!”` se for true e `“Sub!”` se for false;


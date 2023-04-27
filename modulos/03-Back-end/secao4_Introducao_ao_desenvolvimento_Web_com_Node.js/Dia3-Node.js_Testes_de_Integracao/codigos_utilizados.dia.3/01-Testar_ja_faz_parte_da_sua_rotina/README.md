 # Cenários de como começar um teste!

imagine que queremos criar uma função a qual receba a média das notas de uma pessoa e responda se ela foi aprovada ou não, seguindo a seguinte regra:
|       Média         |   Situação    |
|:-------------------:|:-------------:|
|     Menor que 7     |  Reprovação   |
|Igual ou maior que 7 |  Aprovação    |

### 1° - O primeiro passo é pensar na estrutura da nossa função.
Para isso, podemos fazer as seguintes perguntas:

- Quantos e quais parâmetros ela vai esperar?
- Qual é o tipo de resposta que ela vai retornar?

Nesse caso, nossa função deverá receber **um parâmetro “média”** e responder com **“reprovação” ou “aprovação”**.

[código da função implementada](./examples/calculaSituacao.js)

### 2° - Segundo passo. Tendo o código da função implementado, precisamos garantir que seu comportamento é o esperado e que ele não mudará sem aviso.
Para isto, devemos testar seus casos de uso e verificar se ela exibe, para cada caso, o comportamento esperado.
Algumas das coisas que precisamos garantir são:

- Se passado um valor **menor que 7**, por exemplo **4**, a resposta deve ser **“reprovação”**;
- Se passado um valor **maior que 7**, por exemplo **9**, a resposta ser **“aprovação”**;
- Não podemos esquecer do **“OU”**, sendo assim, se passado **7**, a resposta deve ser **“aprovação”**;

### 3°- Terceiro Passo. 👉 Se pensarmos nessa forma manual de testar aplicações, precisamos de três cenários de testes distintos:

1️⃣ quando a média for menor que sete;

2️⃣ quando a média for maior que sete;

3️⃣ quando a média for igual a sete.

Podemos programar um script simples com esses testes e adicionar algumas mensagens para nos ajudar a verificar se a resposta dada é aquela que esperamos.

[scripts, testes de cenários](./examples/testesDeCalculaSituacao.js);
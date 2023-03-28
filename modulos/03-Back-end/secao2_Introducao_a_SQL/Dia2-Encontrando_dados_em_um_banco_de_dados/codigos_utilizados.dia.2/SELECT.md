 # Entendendo comandos SELECT - MySQL


<details><summary><strong>Executando comandos SELECT</strong></summary>
Os comandos usados a seguir, terão resultados parecidos com esse exemplo de uma saída de tabela no workbench:

| # | colunas | colunas |
|:-:| :----:  | :----:  |
| 1 | valores | valores |
| 2 | valores | valores |

---

**Comando SQL:**
```SQL
SELECT 'Olá, bem-vindo ao SQL!';
```
Resultado:

|#| Olá, bem-vindo ao SQL! |
|-|:---------------------: |
|1| Olá, bem-vindo ao SQL! |

---

**Comando SQL:**
```SQL
SELECT 10;
```
Resultado:

| # | 10 |
|:-:|:--:|
| 1 | 10 |

---

****Comando SQL:****
```SQL
SELECT now();
```
Resultado, seleciona a hora atual da máquina usada:

| # | 2023-03-28 11:45:00 |
|:-:| :-----------------: |
| 1 | 2023-03-28 11:45:00 |

---

****Comando SQL:****
```SQL
SELECT 20 * 2;
```
Resultado, ele resolve a conta de vezes:

| # | 20 * 2 |
|:-:| :----: |
| 1 |  40    | 

---

**Comando SQL:**
```SQL
SELECT 50 / 2;
```
Resultado, ele resolve a conta de divisão:

| # | 50 / 2  |
|:-:| :----:  |
| 1 | 25.0000 |

---

**Comando SQL:**
```SQL
SELECT 18 AS idade;
```
Resultado, `AS` indica que o nome da coluna irá ser idade:

| # | idade |
|:-:| :---: |
| 1 |  18   |

---

**Comando SQL:**
```SQL
SELECT 2019 AS ano;
```
Resultado, `AS` indica que o nome da coluna irá ser ano:

| # | ano  |
|:-:| :--: |
| 1 | 2019 |

---

**Comando SQL:**
```SQL
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
```
Resultado:

| # | Rafael | Martins | 25 | Desenvolvedor Web |
|:-:| :----: | :----:  |:-: | :---------------: |
| 1 | Rafael | Martins | 25 | Desenvolvedor Web |

---

**Comando SQL:**
```SQL
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
```
Resultado, `AS` indica o nome que a coluna irá ter:

| # |  nome  | sobrenome | idade |  Área de atuação  |
|:-:| :----: | :-------: | :---: | :---------------: |
| 1 | Rafael |  Martins  |  25   | Desenvolvedor Web |

---
</details>

<details><summary><strong>Exercícios de fixação</strong></summary>

<details><summary><strong>Exercício de fixação 1</strong></summary>
1 - Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

RESPOSTA:

**Comando SQL:**
```SQL
SELECT 'Maiza', 'Dantas', 'Nova Iguaçu', 22;
```
Resultado:

| # | Maiza | Dantas | Nova Iguaçu | 22 |
|:-:| :---: | :----: | :---------: |:-: |
| 1 | Maiza | Dantas | Nova Iguaçu | 22 |

</details>

<details><summary><strong>Exercício de fixação 2</strong></summary>
2 - Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);

RESPOSTA:

**Comando SQL:**
```SQL
SELECT 'Maiza' AS nome, 'Dantas' AS sobrenome, 'Nova Iguaçu' AS 'Cidade Natal', 22 AS idade;
```
Resultado:

| # |  nome  | sobrenome | Cidade Natal | idade |
|:-:| :----: | :-------: | :----------: | :---: |
| 1 |  Maiza |  Dantas   | Nova Iguaçu  |  22   |

</details>

<details><summary><strong>Exercício de fixação Bônus</strong></summary>
 
 - Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
  
    RESPOSTA:
    ```SQL
    SELECT 13 * 8;
    ```

    SAÍDA:
    | # | 13 * 8 |
    |:-:| :----: |
    | 1 |  104   | 


 - Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.

    RESPOSTA:
    ```SQL
    SELECT now() AS 'Data Atual';
    ```

    SAÍDA:
    | # |     Data Atual      |
    |:-:| :-----------------: |
    | 1 | 2023-03-28 13:16:28 |


  Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:

 - Escreva uma query que selecione todas as colunas da tabela city;

    RESPOSTA:
    ```SQL
    SELECT * FROM sakila.city;
    ```

 - Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;

    RESPOSTA:
    ```SQL
    SELECT first_name, last_name FROM sakila.customer;
    ```

 - Escreva uma query que exiba todas as colunas da tabela rental;

    RESPOSTA:
    ```SQL
    SELECT * FROM sakila.rental;
    ```

 - Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;

    RESPOSTA:
    ```SQL
    SELECT title, description, release_year FROM sakila.film;
    ```

 - Utilize o SELECT para explorar todas as tabelas do banco de dados.

    RESPOSTA:
    ```SQL
    SELECT * FROM sakila.nome_da_tabela;
    ```

</details>

</details>
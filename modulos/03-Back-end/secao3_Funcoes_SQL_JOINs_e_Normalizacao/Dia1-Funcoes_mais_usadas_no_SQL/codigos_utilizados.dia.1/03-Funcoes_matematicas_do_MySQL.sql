-- Funções matemáticas do MySQL

-- Adição
SELECT 5 + 5;

SELECT title, rental_duration + rental_rate FROM sakila.film LIMIT 10;

-- Subtração
SELECT 5 - 5;

SELECT title, rental_duration - rental_rate FROM sakila.film LIMIT 10;

-- Multiplicação
SELECT 5 * 5;

SELECT title, rental_duration / rental_rate FROM sakila.film LIMIT 10;

-- Divisão
SELECT 5 / 5;

SELECT title, rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- O operador DIV retorna o RESULTADO INTEIRO de uma divisão, ele ignora as casas decimais de um número.
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

-- O operador MOD retorna o RESTO de uma divisão como resultado.
SELECT 10 MOD 3; -- sobra 1
SELECT 10 MOD 2; -- sobra 0
SELECT 14 MOD 3; -- sobra 2
SELECT 13 MOD 2; -- sobra 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- O ROUND arredonda os números de acordo com sua parte decimal. Se for maior ou igual a 0.5, o resultado é um arredondamento para cima. Caso contrário, ocorre um arredondamento para baixo.
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925) AS 'arredondamento para baixo'; -- 10
SELECT ROUND(10.5136) AS 'arredondamento para cima'; -- 11
SELECT ROUND(-10.5136) AS 'arredondamento para cima'; -- -11
SELECT ROUND(10.4925, 2) AS 'Arredondamento com 2 casas decimais'; -- 10.49
SELECT ROUND(10.4925, 3) AS 'Arredondamento com 3 casas decimais'; -- 10.493

-- O arredondamento sempre para cima pode ser feito com o CEIL:
SELECT CEIL(10.51) AS 'arredondamento para cima'; -- 11
SELECT CEIL(10.49) AS 'arredondamento para cima'; -- 11
SELECT CEIL(10.2) AS 'arredondamento para cima'; -- 11

-- O arredondamento sempre para baixo pode ser feito com o FLOOR:
SELECT FLOOR(10.51) AS 'arredondamento para baixo'; -- 10
SELECT FLOOR(10.49) AS 'arredondamento para baixo'; -- 10
SELECT FLOOR(10.2) AS 'arredondamento para baixo'; -- 10

-- Exponenciação e raiz quadrada

-- Elevando um número X à potência Y usando a função POW:
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

-- Encontrando a raiz quadrada de um valor usando SQRT:
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

-- Para situações em que se faz necessário gerar valores aleatórios, podemos usar a função RAND, em conjunto com as funções anteriores.

-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))

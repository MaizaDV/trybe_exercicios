-- O GROUP BY pode ser construído da seguinte forma:
-- SELECT <coluna(s)> FROM <tabela> GROUP BY <coluna(s)>;

-- GROUP BY pode ser usado para agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor, como é feito com a coluna first_name a seguir. Ele agrupa todos os registros que possuem o mesmo first_name, evita duplicações na hora de retornar os dados.
SELECT first_name FROM sakila.actor
GROUP BY first_name;

-- Exemplo sem usar o GROUP BY, podendo retornar dados iguais
SELECT first_name FROM sakila.actor;

--  É mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT.
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Também podemos utilizar o GROUP BY para agrupar os registros pelos valores de mais de uma coluna.
SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rating, rental_rate
ORDER BY rating, rental_rate;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length) AS 'Média de duração de filmes'
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost) AS 'Valor mínimo de substituição'
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost) AS 'Valor máximo de substituição'
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;


-- => Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.

-- ==> É importante entender que, quando usamos o HAVING, estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado. <==

-- A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING, para que somente os nomes que estão cadastrados mais de duas vezes sejam exibidos.
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação, melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING, então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- Aqui estamos buscando todos os filmes de acordo com a classificação por idade, coluna rating, e que possuam o mesmo preço de aluguel, coluna rental_rate. E ainda exista um total de filmes nesse agrupamento, que seja menor que 70.
SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rental_rate, rating
HAVING total < 70
ORDER BY rating, rental_rate;

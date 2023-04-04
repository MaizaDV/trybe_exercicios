-- Para fixar

-- Para praticar, vamos encontrar algumas informações sobre os filmes cadastrados em nossa base de dados.

-- => 1 - Monte um query que exiba:

-- A média de duração dos filmes e dê o nome da coluna de ‘Média de Duração’;

-- A duração mínima dos filmes como ‘Duração Mínima’;

-- A duração máxima dos filmes como ‘Duração Máxima’;

-- A soma de todas as durações como ‘Tempo de Exibição Total’;

-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.

SELECT
    AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;

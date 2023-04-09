-- Sintaxe:
-- SELECT IF(condição, valor_se_verdadeiro, valor_se_falso);

-- SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
-- FROM pessoas;

-- SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
-- FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;

SELECT title, IF(rental_rate > 0.99, 'CARO', 'BARATO') FROM sakila.film;

-- Sintaxe:
-- SELECT CASE
--   WHEN condicao THEN valor
--   ELSE valor padrao
-- END;

-- SELECT
--     nome,
--     nivel_acesso,
--     CASE
--         WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
--         WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
--         WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
--         ELSE 'Usuário sem acesso'
--     END AS nivel_acesso
-- FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

SELECT title, rental_rate,
  CASE
    WHEN rental_rate = 0.99 THEN 'BARATO' 
    WHEN rental_rate = 2.99 THEN 'MÉDIO'
    WHEN rental_rate = 4.99 THEN 'CARO'
  ELSE rental_rate = 'NÃO CLASSIFICADO'
END AS 'VALOR' FROM sakila.film;

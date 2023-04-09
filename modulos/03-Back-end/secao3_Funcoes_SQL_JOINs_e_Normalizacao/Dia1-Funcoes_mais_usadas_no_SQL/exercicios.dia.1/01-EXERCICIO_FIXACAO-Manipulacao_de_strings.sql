-- EXERCÍCIO DE FIXAÇÃO - Manipulação de strings.

-- 1 - Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe') AS 'CAIXA ALTA';

-- 2 - Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google') AS 'Resposta';

-- 3 - Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT CHAR_LENGTH('Uma frase qualquer') AS 'Tamanho da string';

-- 4 - Extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10) AS 'Resposta';
-- OU
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', -36, 10) AS 'Resposta';

-- 5 - Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL') AS 'caixa baixa';

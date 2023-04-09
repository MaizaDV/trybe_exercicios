-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
-- SELECT REPLACE(<string original>, <uma palavra da string original>, <nova palavra para ser substituída>) AS "replace function";
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres') AS "replace function";

-- Retorna a parte da esquerda de uma string de acordo com o número de caracteres especificado
-- SELECT LEFT(<string>, <número de caracteres>);

SELECT LEFT('Oi, eu sou uma string', 10) AS "retorna a partir da Esquerda";

-- Retorna a parte da direita de uma string de acordo com o número de caracteres especificado
-- SELECT RIGHT(<string>, <número de caracteres>);

SELECT RIGHT('Oi, eu sou uma string', 10) AS "retorna a partir da Direita";
-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
-- SELECT CHAR_LENGTH(<string>);
SELECT CHAR_LENGTH('Oi, eu sou uma string') AS "tamanho da string";

-- Extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair
-- SELECT SUBSTRING('Oi, eu sou uma string', <index do caractere inicial>, <index de caracteres a extrair>);
SELECT SUBSTRING('Oi, eu sou uma string', 5, 6);

-- Se a quantidade de caracteres a extrair não for definida, então a string será extraída do índice inicial definido, até o seu final
-- SELECT SUBSTRING('Oi, eu sou uma string', <index do caractere inicial>);
SELECT SUBSTRING('Oi, eu sou uma string', 5);

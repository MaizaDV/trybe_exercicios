-- Veremos um exemplo para ilustrar a utilização de uma chave primária composta, considere a seguinte tabela.
-- No exemplo teremos um erro "Duplicate entry 'Rio Claro' for key 'PRIMARY'", pois há uma violação da chave primária, já que o nome “Rio Claro” será duplicado e isto não é permitido.
--
DROP SCHEMA IF EXISTS brasil;
CREATE SCHEMA brasil;
USE brasil;

CREATE TABLE cidades(
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER,
  CONSTRAINT PRIMARY KEY(cidade)
);

INSERT INTO cidades(cidade, estado, populacao)
  VALUES('Rio Claro','SP',185421),
    ('Rio Claro','RJ',17216);
-- 
-- A solução para o problema acima é criarmos uma chave primária composta.
-- 
DROP SCHEMA IF EXISTS brasil;
CREATE SCHEMA brasil;
USE brasil;
CREATE TABLE cidades(
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER,
  CONSTRAINT PRIMARY KEY(cidade, estado)
);
INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
  ('Rio Claro','RJ',17216);


-- exemplo para seguir o padrão de termos uma chave primária simples podemos mudar a query para fazer da seguinte forma:
-- 
-- Apagar a versão antiga da tabela
  DROP TABLE cidades;

  -- Cria uma tabela
  CREATE TABLE cidades(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER
  );

  -- Insere os dados na tabela
  INSERT INTO cidades(cidade, estado, populacao)
  VALUES('Rio Claro','SP',185421),
  ('Rio Claro','RJ',17216);

-- chave primária composta Tabela N:N
-- 
-- Há muitas formas de grafia existentes, mas para manter uma padronização e seguirmos a boa prática adotaremos a notação em "snake_case"
-- para construirmos nossos bancos de dados e tabelas.

DROP SCHEMA IF EXISTS trybe_flix;
CREATE SCHEMA trybe_flix;
USE trybe_flix;

-- Primeiro criamos a tabela actor
CREATE TABLE actor(
    actor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- E a tabela film
CREATE TABLE film(
    film_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- E por fim, a tabela film_actor com a relação N:N

CREATE TABLE film_actor(
  actor_id INTEGER,
  film_id INTEGER,
  CONSTRAINT PRIMARY KEY(actor_id, film_id),
    FOREIGN KEY (actor_id) REFERENCES actor (actor_id),
    FOREIGN KEY (film_id) REFERENCES film (film_id)
);

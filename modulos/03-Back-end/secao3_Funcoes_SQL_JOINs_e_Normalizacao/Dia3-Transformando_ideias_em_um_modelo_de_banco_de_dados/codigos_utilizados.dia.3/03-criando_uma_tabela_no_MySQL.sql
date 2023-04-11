-- apaga o banco de dados se já existir a tabela álbuns
DROP DATABASE IF EXISTS albuns;
--
-- cria o banco de dados 
CREATE DATABASE albuns;
--
-- seleciona o banco de dados
USE albuns;
-- 
-- cria a tabela artista(tabela pai)
CREATE TABLE artista(
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
) ENGINE=InnoDB;
--
-- cria tabela estilomusical(tabela pai)
CREATE TABLE estilomusical(
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
) ENGINE=InnoDB;
--
-- OBSERVAÇÃO: Ao tentar criar uma tabela com uma FOREIGN KEY que referencie uma tabela que não foi criada ainda, gera um erro "Error Code: 1215. Cannot add foreign key constraint".
-- para isso é preciso primeiro criar tabelas pais, para depois criar tabelas filhos que façam a referência a tabela pai
--
-- criar tabela album(tabela filho)
CREATE TABLE album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
	artista_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;

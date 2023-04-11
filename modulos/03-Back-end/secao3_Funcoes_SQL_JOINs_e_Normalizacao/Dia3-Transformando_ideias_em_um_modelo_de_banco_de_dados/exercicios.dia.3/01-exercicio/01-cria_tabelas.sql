DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;
--
-- cria tabela animais
CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_animal VARCHAR(50) NOT NULL,
    especie_animal VARCHAR(50) NOT NULL,
    sexo_animal VARCHAR(50) NOT NULL,
    idade_animal INT NOT NULL,
    localizacao_animal VARCHAR(50) NOT NULL
) ENGINE=InnoDB;
--
-- cria tabela gerentes
CREATE TABLE gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_gerente VARCHAR(50) NOT NULL
) ENGINE=InnoDB;
--
-- cria tabela cuidadores
CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_cuidador VARCHAR(50) NOT NULL,
	gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes(gerente_id)
) ENGINE=InnoDB;
--
-- cria tabela animais_cuidadores
CREATE TABLE animais_cuidadores(
    animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
) ENGINE=InnoDB;

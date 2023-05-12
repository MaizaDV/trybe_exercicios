DROP DATABASE IF EXISTS trybestrelar;

CREATE DATABASE trybestrelar;

USE trybestrelar;

CREATE TABLE
    missions (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(90) NOT NULL,
        year VARCHAR(45) NOT NULL,
        country VARCHAR(90) NOT NULL,
        destination VARCHAR(90) NOT NULL,
        PRIMARY KEY(id)
    );

INSERT INTO missions 
    (`id`,`name`,`year`,`country`,`destination`) 
VALUES 
    (1,'Mariner 2','1962','Estados Unidos','Vênus'),
    (2,'Venera 4','1967','URSS','Vênus'),
    (3,'Mariner 5','1967','Estados Unidos','Vênus'),
    (4,'Apollo 11','1969','Estados Unidos','Lua'),
    (5,'Mariner 10','1973','Estados Unidos','Mercúrio e Vênus'),
    (6,'Voyager 1','1977','Estados Unidos','Espaço interestelar'),
    (7,'Venera 16','1983','URSS','Vênus'),
    (8,'Phobos 1','1988','URSS','Marte'),
    (9,'Phobos 2','1988','URSS','Marte'),
    (10,'Galileo','1989','Estados Unidos','Júpiter'),
    (11,'Mars Pathfinder','1996','Estados Unidos','Marte'),
    (12,'Cassini-Huygens','1997','Estados Unidos e Europa','Saturno'),
    (13,'Nozomi (Planeta B)','1998','Japão','Marte'),
    (14,'Estação Internacional Espacial','1998','Estados Unidos e Rússia','Órbita terrestre'),
    (15,'Mars Polar Lander','1999','Estados Unidos','Marte'),
    (16,'2001 Mars Odyssey','2001','Estados Unidos','Marte'),
    (17,'Genesis','2001','Estados Unidos','Terra'),
    (18,'MESSENGER','2004','Estados Unidos','Mercúrio'),
    (19,'Telescópio Espacial Kepler','2009','Estados Unidos','Espaço interestelar'),
    (20,'Telescópio Espacial James Webb','2021','Estados Unidos, União Europeia e Canadá','Espaço interestelar');

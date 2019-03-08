-- DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db; 
USE burgers_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR (255) NOT NULL ,
    devoured BOOLEAN NOT NULL DEFAULT FALSE
);
UPDATE burgers SET devoured = true WHERE id = 2;
SELECT * FROM burgers;
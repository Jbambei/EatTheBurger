DROP DATABASE IF EXISTS burgers_db
CREATE DATABASE burgers_db
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	burger_name VARCHAR(127) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	date TIMESTAMP DEFAULT now()
);
 CREATE DATABASE IF NOT EXISTS nodejs;

 USE nodejs;

CREATE TABLE empleado (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) DEFAULT NULL,
  salario INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE empleado;

INSERT INTO empleado values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);

SELECT * FROM empleado;
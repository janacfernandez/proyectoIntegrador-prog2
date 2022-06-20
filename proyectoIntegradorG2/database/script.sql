CREATE SCHEMA top_wheels_db;

USE top_wheels_db;

CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    fDeNac DATE NOT NULL,
    dni INT NOT NULL,
    foto VARCHAR(500),
    createdAt DATE,
    updatedAt DATE,
    deletedAt DATE 
);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
img VARCHAR(500),
nombre VARCHAR(100) NOT NULL,
descripcion VARCHAR(1000) NOT NULL,
anio INT NOT NULL, 
comentarios VARCHAR(500) NOT NULL,
createdAt DATE,
updatedAt DATE,
deletedAt DATE,
userId INT UNSIGNED,
FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentarios VARCHAR(500) NOT NULL,
createdAt DATE,
updatedAt DATE,
deletedAt DATE, 
userId INT UNSIGNED,
productId INT UNSIGNED,
FOREIGN KEY (userId) REFERENCES users(id), 
FOREIGN KEY (productId) REFERENCES products(id)
);

CREATE TABLE followers (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
seguidor INT UNSIGNED,
seguido INT UNSIGNED,
FOREIGN KEY (seguidor) REFERENCES users(id),
FOREIGN KEY (seguido) REFERENCES users(id)
);

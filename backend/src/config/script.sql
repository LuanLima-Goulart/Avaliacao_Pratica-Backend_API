create database Controle_produtos;
use Controle_produtos;

CREATE TABLE categoria 
( 
 Id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(150) NOT NULL,  
 UNIQUE (Nome)
); 

CREATE TABLE produto 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(150) NOT NULL,  
 valor FLOAT NOT NULL,  
 quantidade INT NOT NULL,  
 idCategoria INT NOT NULL,
 CONSTRAINT FK_idCategoria FOREIGN KEY (idCategoria) REFERENCES categoria(id)
);

insert categoria (nome) values
("Técnologia");

insert produto (nome, valor, quantidade, idCategoria) values
("Notebook", 2500, 45, 1);
-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE pokemania;

USE pokemania; 

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE resposta_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkQuiz INT,
    acertou BOOLEAN,
    FOREIGN KEY (fkQuiz) REFERENCES quiz(id)
);


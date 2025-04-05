create database sistema_db;
use sistema_db;

create table card(
id int primary key not null auto_increment,
nome varchar(50) not null,
hp int not null,
elem varchar(40),
evo int,
atk int,
custo_atk int
);


insert into card (nome, hp, elem, evo, atk, custo_atk)  
VALUES  
('Pikachu', 60, 'Elétrico', 1, 50, 1),  
('Charizard', 150, 'Fogo', 3, 120, 3),  
('Bulbasaur', 70, 'Planta', 1, 40, 1),  
('Squirtle', 60, 'Água', 1, 40, 1),  
('Gengar', 130, 'Fantasma', 3, 100, 2); 


select * from card;
DROP DATABASE IF EXISTS usersDB;
CREATE database usersDB;

USE usersDB;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `real_name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,   
    `profile_pic` VARCHAR(255) NOT NULL
);

SELECT * FROM users;

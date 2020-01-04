DROP DATABASE IF EXISTS friendsDB;
CREATE database friendsDB;

USE friendsDB;

CREATE TABLE friends (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `real_name` VARCHAR(255) NOT NULL,
    `profile_pic` VARCHAR(255) NOT NULL
);

SELECT * FROM friends;

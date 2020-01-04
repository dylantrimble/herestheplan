DROP DATABASE IF EXISTS placesDB;
CREATE database placesDB;

USE placesDB;

CREATE TABLE places (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start_at` TIME,
    `end_at` TIME,
    `address` VARCHAR(255) NOT NULL
);

SELECT * FROM places;

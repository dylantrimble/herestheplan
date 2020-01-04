DROP DATABASE IF EXISTS saved_placesDB;
CREATE database saved_placesDB;

USE saved_placesDB;

CREATE TABLE saved_places (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start_at` TIME,
    `end_at` TIME,
    `event` VARCHAR(255) NOT NULL,
    `date` DATE
);

SELECT * FROM saved_places;

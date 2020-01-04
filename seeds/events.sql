DROP DATABASE IF EXISTS eventsDB;
CREATE database eventsDB;

USE eventsDB;

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start_at` TIME,
    `end_at` TIME,
    `event` VARCHAR(255) NOT NULL,
    `date` DATE
);

SELECT * FROM events;

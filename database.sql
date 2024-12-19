CREATE DATABASE eritrean_community;

USE eritrean_community;

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(100) NOT NULL
);

CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL
);

INSERT INTO events (title, date, location) VALUES
('Annual Conference', '2024-06-10', 'Washington, D.C.'),
('Virtual Seminar', '2024-08-15', 'Online'),
('Networking Meetup', '2024-12-05', 'Asmara, Eritrea');
SELECT * FROM events;

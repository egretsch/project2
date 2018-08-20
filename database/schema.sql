CREATE DATABASE paradigm_test;

USE paradigm_test;

CREATE TABLE articles (
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(255),
    author varchar(255),
    image varchar(255),
    body text(60000), 
    snippet varchar(500),
    PRIMARY KEY (id)
);
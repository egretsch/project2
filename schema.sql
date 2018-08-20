CREATE DATABASE paradigm_test;

USE paradigm_test;

CREATE TABLE articles (
    title varchar(255),
    author varchar(255),
    image varchar(255),
    body text(60000), 
    snippet varchar(500)
);
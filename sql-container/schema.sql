create database storagedb;
use storagdb;

CREATE TABLE files (
    id INTEGER AUTO_INCREMENT,
    userName TEXT,
    file TEXT,
    fileName TEXT,
    size INTEGER,
    dateOfCreation DATE,
    PRIMARY KEY (id)
);

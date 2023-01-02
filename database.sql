-- Create database
CREATE DATABASE social_media;

-- Use the database
USE memories;

-- Create table-1 for users
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255)  NOT NULL,
    profile_pic VARCHAR(255),
    PRIMARY KEY (id)
);

-- Create table-2 for posts
CREATE TABLE posts(
	id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    media VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
DROP DATABASE IF EXISTS services;
CREATE DATABASE services;

\c services;

CREATE TABLE service (
  ID SERIAL PRIMARY KEY,
  image VARCHAR(512) NOT NULL,
  name VARCHAR NOT NULL UNIQUE ,
  address VARCHAR NOT NULL,
  telephone VARCHAR(12) NOT NULL,
  email TEXT NOT NULL,
  category VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  link VARCHAR NOT NULL,
  rcgp VARCHAR NOT NULL,
  postcode VARCHAR(8) NOT NULL
);

INSERT INTO service (image, name, address, telephone, email, category, description, link, rcgp, postcode)
  VALUES ( 'not available', 'not available','not available','111','not available','not available','not available','not available','not available','postcode');

DROP DATABASE IF EXISTS services;
CREATE DATABASE services;

\c services;

CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE service (
  ID SERIAL PRIMARY KEY,
  image VARCHAR(512) NOT NULL,
  name VARCHAR NOT NULL UNIQUE ,
  address VARCHAR NOT NULL,
  telephone INT NOT NULL,
  email citext NOT NULL UNIQUE,
  category VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  link VARCHAR NOT NULL,
  rcgp_curriculum VARCHAR NOT NULL
);

INSERT INTO service (image, name, address, telephone, email, category, description, link, rcgp_curriculum)
  VALUES (
    'link to image goes here',
   'Primary Care Mental Health Team (Improving Access to Psychological Therapies or IAPT)',
   'Community Mental Health Services',
   'address',
   111111,
   'email@gmail.com',
   'Mental Health',
   'A team of trained mental health psychological wellbeing practitioners and therapists offering a wide range of treatments and interventions to help those experiencing common mental health problems',
    'weblink goes here',
    ' Care of people with mental health problems'
  );

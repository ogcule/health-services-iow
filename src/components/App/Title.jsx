import React from 'react';
import styles from './App.scss';
import Nav from './../Nav/Nav';

const Title = () => (
  <header className={styles.header}>
    <h1>Information Portal</h1>
    <Nav />
  </header>
);

export default Title;

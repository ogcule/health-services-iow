import React from 'react';
import styles from './App.scss';
import Nav from './../Nav/Nav';
import island from './../../images/iow.png';

const Title = () => (
  <header className={styles.header}>
    <div className={styles.image}>
      <img src={island} alt="Island info" />
    </div>
    <Nav />
  </header>
);

export default Title;

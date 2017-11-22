import React from 'react';
import styles from './home.scss';
import island from './../../images/iowBig.png';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.innerDiv}>
      <img src={island} alt="Island" />
      <p>This project is to make accessing information on available health
      services easier. It is in development and this is a deployment test.
      </p>
    </div>
  </div>
);

export default Home;

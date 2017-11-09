import React from 'react';
import styles from './home.scss';
import island from './../../images/iow.png';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.about}>
      <img src={island} alt="Island" />
    </div>
  </div>
);

export default Home;

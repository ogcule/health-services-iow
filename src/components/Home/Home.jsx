import React from 'react';
import styles from './home.scss';

const localImage = process.env.NODE_ENV !== 'production' ?
  require('./../../../local/images/local.png') : require('./../../images/computerSteth.png');

const Home = () => (
  <div className={styles.container}>
    <div className={styles.innerDiv}>
      <img src={localImage} alt="Organisation" />
      <p>This project is to make accessing information on available health
      services easier. It is in development and this is a deployment test.
      </p>
    </div>
  </div>
);

export default Home;

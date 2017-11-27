import React from 'react';
import styles from './services.scss';

const NoServices = () => (
  <div className={styles.noServices}>
    <h2>Sorry, no services using these search criteria.</h2>
  </div>
);

export default NoServices;

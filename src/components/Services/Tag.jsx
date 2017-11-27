import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';

const Tag = props => (
  <li className={styles.tagContainer}>
    <svg id="bg" width="100" height="100%" viewBox="0 0 150 100" preserveAspectRatio="none">
      <path d="M0,0 h110 l40,50 l-40,50 h-110z" fill="#999" />
    </svg>
    <div className={styles.tagContent}>{props.tag}</div>
  </li>
);

Tag.propTypes = {
  tag: PropTypes.string,
};
Tag.defaultProps = {
  tag: '',
};

export default Tag;

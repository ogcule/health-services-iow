import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';

const CloseCategories = props => (
  <div className={styles.menuBtn}>
    <span>Close</span>
    <button className={styles.closeBtn} onClick={props.handleDisplayCategories} />
  </div>
);

CloseCategories.propTypes = {
  handleDisplayCategories: PropTypes.func,
};
CloseCategories.defaultProps = {
  handleDisplayCategories: null,
};
export default CloseCategories;

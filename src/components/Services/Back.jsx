import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';

const Back = props => (
  <button
    className={styles.backBtn}
    onClick={props.handleClearAll}
  />
);

Back.propTypes = {
  handleClearAll: PropTypes.func,
};
Back.defaultProps = {
  handleClearAll: null,
};
export default Back;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './shared.scss';

const CloseFormBtn = props => (
  <div className={styles.closebtn}>
    <button onClick={props.closeForm}>&times;</button>
  </div>
);
CloseFormBtn.propTypes = {
  closeForm: PropTypes.func,
};
CloseFormBtn.defaultProps = {
  closeForm: null,
};
export default CloseFormBtn;

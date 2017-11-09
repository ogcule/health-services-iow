import React from 'react';
import PropTypes from 'prop-types';
import styles from './shared.scss';

const OpenFormBtn = props => (
  <div className={styles.add}>
    <p>{props.text} <button onClick={props.openForm}>+</button></p>
  </div>
);

OpenFormBtn.propTypes = {
  openForm: PropTypes.func,
  text: PropTypes.string,
};
OpenFormBtn.defaultProps = {
  openForm: null,
  text: null,
};
export default OpenFormBtn;

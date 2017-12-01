import React from 'react';
import PropTypes from 'prop-types';
import styles from './shared.scss';

const OpenFormBtn = props => (
  <div className={styles.addBtn}>
    <button onClick={props.openForm} />
  </div>
);

OpenFormBtn.propTypes = {
  openForm: PropTypes.func,
};
OpenFormBtn.defaultProps = {
  openForm: null,
};
export default OpenFormBtn;

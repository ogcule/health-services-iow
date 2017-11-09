import React from 'react';
import PropTypes from 'prop-types';
import styles from './shared.scss';

const ErrorMsg = props => <p className={styles.errorText}>{props.msg}</p>;

ErrorMsg.propTypes = {
  msg: PropTypes.string,
};
ErrorMsg.defaultProps = {
  msg: null,
};
export default ErrorMsg;

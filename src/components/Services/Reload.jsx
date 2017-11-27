import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import { filterType } from './../../types/index';

const Reload = props => (
  <button
    className={styles.reloadBtn}
    onClick={props.handleFilterClick}
    data-category={props.filter.category}
  />
);

Reload.propTypes = {
  handleFilterClick: PropTypes.func,
  filter: filterType,
};
Reload.defaultProps = {
  handleFilterClick: null,
  filter: null,
};
export default Reload;

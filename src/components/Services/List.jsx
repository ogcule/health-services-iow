import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';

const List = props => (
  <div className={styles.menuBtn}>
    <span>Categories</span>
    <button className={styles.listBtn} onClick={props.handleDisplayCategories} />
  </div>
);

List.propTypes = {
  handleDisplayCategories: PropTypes.func,
};
List.defaultProps = {
  handleDisplayCategories: null,
};
export default List;

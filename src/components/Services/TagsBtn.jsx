import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';

const TagsBtn = props => (
  <div className={styles.menuBtn}>
    <span>Tags</span>
    <button className={styles.tagsBtn} onClick={props.handleTagMenu} />
  </div>
);

TagsBtn.propTypes = {
  handleTagMenu: PropTypes.func,
};
TagsBtn.defaultProps = {
  handleTagMenu: null,
};
export default TagsBtn;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/menu.scss';

const Menu = (props) => {
  let visibilityDisplayCategories = 'hide';
  if (props.displayCategories) {
    visibilityDisplayCategories = 'show';
  }
  let visibilityTagMenu = 'hide';
  if (props.tagMenu) {
    visibilityTagMenu = 'show';
  }
  return (
    <div>
      <div className={styles['categories-menu-container']}>
        <div className={`${styles['categories-menu']} ${styles[visibilityDisplayCategories]}`} >
          {props.children[0]}
          {props.displayCategories && props.children[1]}
        </div>
      </div>
      <div className={styles['tags-menu-container']}>
        <div className={`${styles['tags-menu']} ${styles[visibilityTagMenu]}`}>
          {!props.displayCategories && props.children[2]}
          {(props.tagMenu && !props.displayCategories) && props.children[3]}
        </div>
      </div>
      {props.children[4]}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  displayCategories: PropTypes.bool,
  tagMenu: PropTypes.bool,
};
Menu.defaultProps = {
  children: null,
  displayCategories: false,
  tagMenu: false,
};
export default Menu;

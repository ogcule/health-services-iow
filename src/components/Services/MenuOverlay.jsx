import React from 'react';
import { bool, func, node } from 'prop-types';
import images from './../../utils/images';
import OptionBtn from './../shared/OptionBtn';
import styles from './styles/menuOverlay.scss';

const MenuOverlay = (props) => {
  const background = props.menuOverlay ?
    'transparent-bg' :
    'container';
  return (
    <div className={styles[background]}>
      <div className={styles['menu-container']}>
        {!props.tagMenu && <OptionBtn
          text="Categories"
          image={images.listIcon}
          active={props.displayCategories}
          clickHandler={() => { props.handleDisplayCategories(); props.handleMenuOverlayChange(); }}
        />}
        {!props.displayCategories && <OptionBtn
          text="Tags"
          image={images.tagIcon}
          active={props.tagMenu}
          clickHandler={() => { props.handleTagMenu(); props.handleMenuOverlayChange(); }}
        />}
        {(!props.searchBox && !props.menuOverlay) && <OptionBtn
          text="Search"
          image={images.search}
          active={props.searchBox}
          clickHandler={() => { props.handleSearchBoxChange(); }}
        />}
        {!props.menuOverlay && props.children[2]}
      </div>
      <div>
        {props.displayCategories && props.children[0]}
        {props.tagMenu && props.children[1]}
      </div>
    </div>
  );
};

MenuOverlay.propTypes = {
  handleDisplayCategories: func,
  handleTagMenu: func,
  handleMenuOverlayChange: func,
  handleSearchBoxChange: func,
  // handleFilterChange: func,
  displayCategories: bool,
  tagMenu: bool,
  menuOverlay: bool,
  children: node,
  searchBox: bool,
};
MenuOverlay.defaultProps = {
  handleDisplayCategories: null,
  handleTagMenu: null,
  handleMenuOverlayChange: null,
  handleSearchBoxChange: null,
  // handleFilterChange: null,
  displayCategories: false,
  tagMenu: false,
  menuOverlay: false,
  children: null,
  searchBox: false,
};
export default MenuOverlay;

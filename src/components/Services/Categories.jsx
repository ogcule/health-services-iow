import React from 'react';
import PropTypes from 'prop-types';
import { categories } from './../../data/categories';
import styles from './styles/categories.scss';


const Categories = props => (
  <div className={styles['categories-container']} >
    <ul className={styles.categories}>
      {categories.map(category => (
        <li key={category}>
          <button data-category={category} onClick={props.handleFilterClick}>{category}</button>
        </li>
        ))
      }
    </ul>
  </div>
);

Categories.propTypes = {
  handleFilterClick: PropTypes.func,
};
Categories.defaultProps = {
  handleFilterClick: null,
};
export default Categories;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/filterByTags.scss';
import { tags } from './../../data/categories';
import { filterType } from './../../types/index';

const FilterByTags = props => (
  <div className={styles['tags-filter-menu']}>
    <form method="get" className={styles['filter-by-tags']} >
      <label htmlFor="tags">
        <span>Filter by tags {props.filter.category && `in ${props.filter.category}`}: </span>
        <select id="tags" value={props.filter.tags} data-category={props.filter.category} data-forms="getTags" name="tags" onChange={props.handleInputChange} >
          <option value="">Select one:</option>
          {tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>))}
        </select>
      </label>
    </form>
  </div>
);
FilterByTags.propTypes = {
  filter: filterType,
  handleInputChange: PropTypes.func,
};
FilterByTags.defaultProps = {
  filter: {},
  handleInputChange: null,
};

export default FilterByTags;

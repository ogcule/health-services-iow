import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import { tags } from './../../data/categories';
import { filterType } from './../../types/index';

const FilterByTags = props => (
  <form method="get" onSubmit={props.handleSubmitTags} className={styles.filterByTags} >
    <label htmlFor="tags">
      <span>Filter by tags {props.filter.category && `in ${props.filter.category}`}: </span>
      <select id="tags" value={props.filter.tags} data-forms="filter" name="tags" onChange={props.handleInputChange} >
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>))}
      </select>
    </label>
    <input type="submit" value="Submit" />
  </form>
);
FilterByTags.propTypes = {
  filter: filterType,
  handleInputChange: PropTypes.func,
  handleSubmitTags: PropTypes.func,
};
FilterByTags.defaultProps = {
  filter: {},
  handleInputChange: null,
  handleSubmitTags: null,
};

export default FilterByTags;

import React from 'react';
import PropTypes from 'prop-types';
import { tags } from './../../data/categories';
import { filterType } from './../../types/index';

const FilterByTags = props => (
  <form method="post">
    <label htmlFor="tags" onSubmit={console.log('FilterByTags submits: ')}>
      <span>Filter by tags: </span>
      <select id="tags" value={props.filter.tags} name="tags" onChange={props.handleInputChange} >
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>))}
      </select>
    </label>
  </form>
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

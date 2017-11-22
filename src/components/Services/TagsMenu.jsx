import React from 'react';
import PropTypes from 'prop-types';
import { tags } from './../../data/categories';

const TagsMenu = props => (
  <select id="tags" value={props.values.tags} name="tags" onChange={props.handleInputChange}>
    {tags.map(tag => (
      <option key={tags} value={tags}>
        {tag}
      </option>))}
  </select>
);

TagsMenu.propTypes = {
  handleInputChange: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string),
};
TagsMenu.defaultProps = {
  handleInputChange: null,
  values: {},
};
export default TagsMenu;

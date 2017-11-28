import React from 'react';
import PropTypes from 'prop-types';
import { tags } from './../../data/categories';
import { serviceInfoType } from './../../types/index';

const TagsMenu = props => (
  <select id="tags" value={props.values.tags} name="tags" data-forms="value" onChange={props.handleInputChange} multiple size="3">
    {tags.map(tag => (
      <option key={tag} value={tag}>
        {tag}
      </option>))}
  </select>
);

TagsMenu.propTypes = {
  handleInputChange: PropTypes.func,
  values: serviceInfoType,
};
TagsMenu.defaultProps = {
  handleInputChange: null,
  values: {},
};
export default TagsMenu;

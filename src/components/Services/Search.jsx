import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import { filterType } from './../../types/index';

const Search = props => (
  <form className={styles.searchBox} >
    <input
      type="text"
      name="search"
      data-forms="filter"
      className={styles.searchTerm}
      value={props.filter.search}
      onChange={props.handleInputChange}
      placeholder="Search..."
    />
    <button type="submit" onClick={props.handleSearchClick} />
  </form>
);

Search.propTypes = {
  filter: filterType,
  handleInputChange: PropTypes.func,
  handleSearchClick: PropTypes.func,
};
Search.defaultProps = {
  filter: {},
  handleInputChange: null,
  handleSearchClick: null,
};
export default Search;

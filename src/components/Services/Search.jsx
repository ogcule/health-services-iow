import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import { filterType } from './../../types/index';

const Search = props => (
  <div className={styles.searchContainer}>
    <form className={styles.searchBox} >
      <input
        type="text"
        name="search"
        data-forms="search"
        className={styles.searchTerm}
        value={props.filter.search}
        onChange={props.handleInputChange}
        placeholder="Search..."
      />
      <button type="submit" onClick={props.handleSearchClick} />
    </form>
    {props.filter.searchErr && <p style={{ color: 'red' }}>Error: Please enter text into search box</p>}
  </div>
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

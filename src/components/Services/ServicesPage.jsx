import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/servicesPage.scss';
import Subtitle from './../shared/Subtitle';
import OpenFormBtn from './../shared/OpenFormBtn';
import ServiceForm from './ServiceForm';
import FilteredView from './FilteredView';
import FilterByTags from './FilterByTags';
import CurrentView from './CurrentView';
import OptionBtn from './../shared/OptionBtn';
import Menu from './Menu';
// import Reload from './Reload';
// import Back from './Back';
import Categories from './Categories';
// import TagsBtn from './TagsBtn';
import Search from './Search';
import images from './../../utils/images';
import { serviceInfoType, filterType } from './../../types/index';

const ServicesPage = props => (
  <div className={styles.simpleContainer}>
    <Menu
      displayCategories={props.displayCategories}
      tagMenu={props.tagMenu}
      handleDisplayCategories={props.handleDisplayCategories}
    >
      <OptionBtn
        text="Categories"
        image={[images.listIcon, images.closeIcon]}
        active={props.displayCategories}
        clickHandler={props.handleDisplayCategories}
      />
      <Categories
        handleFilterClick={props.handleFilterClick}
        handleDisplayCategories={props.handleDisplayCategories}
      />
      <OptionBtn
        text="Tags"
        image={[images.tagIcon, images.tagClose]}
        active={props.tagMenu}
        clickHandler={props.handleTagMenu}
      />
      <FilterByTags
        filter={props.filter}
        handleInputChange={props.handleInputChange}
      />
      <button className={styles['search-btn']}>
        <img src={images.search} alt="search" />
      </button>
    </Menu>
    <div className={styles.servicesBox}>
      <CurrentView
        filter={props.filter}
      >
        <Subtitle subtitle="Services" />
        <OpenFormBtn text="" openForm={props.handleFormChange} />
      </CurrentView>
      {!props.filter.filteredView &&
      <Search
        filter={props.filter}
        handleInputChange={props.handleInputChange}
        handleSearchClick={props.handleSearchClick}
      />}
      {props.expanded && <ServiceForm
        closeForm={props.handleFormChange}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
        values={props.values}
        errorMsg={props.errorMsg}
        errorSubmit={props.errorSubmit}
        message={props.message}
      />}
      {props.filter.filteredView &&
        <FilteredView
          loaded={props.loaded}
          filter={props.filter}
          handleInputChange={props.handleInputChange}
        />
      }
    </div>
  </div>
);
ServicesPage.propTypes = {
  loaded: PropTypes.bool,
  handleFormChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleFilterClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  // handleClearAll: PropTypes.func,
  handleSearchClick: PropTypes.func,
  handleDisplayCategories: PropTypes.func,
  handleTagMenu: PropTypes.func,
  values: serviceInfoType,
  expanded: PropTypes.bool,
  message: PropTypes.bool,
  errorSubmit: PropTypes.bool,
  errorMsg: PropTypes.objectOf(PropTypes.string),
  filter: filterType,
  filteredView: PropTypes.bool,
  displayCategories: PropTypes.bool,
  tagMenu: PropTypes.bool,
};
ServicesPage.defaultProps = {
  loaded: false,
  // allServices: null,
  handleFormChange: null,
  handleInputChange: null,
  handleFilterClick: null,
  // handleClearAll: null,
  handleSubmit: null,
  handleSearchClick: null,
  handleDisplayCategories: null,
  handleTagMenu: null,
  expanded: false,
  values: {},
  errorMsg: {},
  message: false,
  errorSubmit: false,
  filter: null,
  filteredView: false,
  displayCategories: false,
  tagMenu: false,
};
export default ServicesPage;

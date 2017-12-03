import React from 'react';
import { func, bool, objectOf, string } from 'prop-types';
import styles from './styles/servicesPage.scss';
import Subtitle from './../shared/Subtitle';
import OpenFormBtn from './../shared/OpenFormBtn';
import ServiceForm from './ServiceForm';
import FilteredView from './FilteredView';
import FilterByTags from './FilterByTags';
import CurrentView from './CurrentView';
import MenuOverlay from './MenuOverlay';
import Search from './Search';
// import OptionBtn from './../shared/OptionBtn';
// import Menu from './Menu';
// import Reload from './Reload';
// import Back from './Back';
import Categories from './Categories';
// import TagsBtn from './TagsBtn';
// import images from './../../utils/images';
import { serviceInfoType, filterType } from './../../types/index';

const ServicesPage = props => (
  <div className={styles['simple-container']}>
    <CurrentView
      filter={props.filter}
      handleFilterClick={props.handleFilterClick}
    >
      <Subtitle subtitle="Services" />
    </CurrentView>
    <div className={styles['services-box']}>
      <MenuOverlay
        handleDisplayCategories={props.handleDisplayCategories}
        displayCategories={props.displayCategories}
        handleTagMenu={props.handleTagMenu}
        handleMenuOverlayChange={props.handleMenuOverlayChange}
        handleFilterChange={props.handleFilterChange}
        tagMenu={props.tagMenu}
        menuOverlay={props.menuOverlay}
        handleSearchBoxChange={props.handleSearchBoxChange}
        searchBox={props.searchBox}
      >
        <Categories
          handleFilterClick={props.handleFilterClick}
          handleDisplayCategories={props.handleDisplayCategories}
        />
        <FilterByTags
          filter={props.filter}
          handleInputChange={props.handleInputChange}
        />
        <OpenFormBtn text="" openForm={props.handleFormChange} />
      </MenuOverlay>
      {console.log(
        'filter',
         props.filter.filteredView,
        'SearchBox',
         props.searchBox,
       )}
      {(!props.filter.filteredView && props.searchBox) &&
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
      {(props.filter.filteredView && !props.searchBox) &&
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
  loaded: bool,
  handleFormChange: func,
  handleInputChange: func,
  handleFilterClick: func,
  handleSubmit: func,
  // handleClearAll: PropTypes.func,
  handleSearchClick: func,
  handleDisplayCategories: func,
  handleTagMenu: func,
  handleMenuOverlayChange: func,
  handleSearchBoxChange: func,
  handleFilterChange: func,
  values: serviceInfoType,
  expanded: bool,
  message: bool,
  errorSubmit: bool,
  errorMsg: objectOf(string),
  filter: filterType,
  filteredView: bool,
  displayCategories: bool,
  tagMenu: bool,
  menuOverlay: bool,
  searchBox: bool,
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
  handleMenuOverlayChange: null,
  handleSearchBoxChange: null,
  handleFilterChange: null,
  expanded: false,
  values: {},
  errorMsg: {},
  message: false,
  errorSubmit: false,
  filter: null,
  filteredView: false,
  displayCategories: false,
  tagMenu: false,
  menuOverlay: false,
  searchBox: false,
};
export default ServicesPage;

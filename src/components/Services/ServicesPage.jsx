import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import Subtitle from './../shared/Subtitle';
// import AllServices from './AllServices';
import OpenFormBtn from './../shared/OpenFormBtn';
import ServiceForm from './ServiceForm';
import FilteredView from './FilteredView';
import Reload from './Reload';
import Back from './Back';
import Categories from './Categories';
import { serviceInfoType, filterType } from './../../types/index';
// import { allServicesType } from './../../types/index';

const ServicesPage = props => (
  <div className={styles.servicesBox}>
    <Subtitle subtitle="Services" />
    <div className={styles.toolBar}>
      <h2>{props.filter.category}</h2>
      {props.filter.category && (
        <div className={styles.toolBarBtns}>
          <Back handleClearAll={props.handleClearAll} />
          <Reload
            handleFilterClick={props.handleFilterClick}
            filter={props.filter}
          />
        </div>
      )}
      <OpenFormBtn text="" openForm={props.handleFormChange} />
    </div>
    {props.expanded && <ServiceForm
      closeForm={props.handleFormChange}
      handleInputChange={props.handleInputChange}
      handleSubmit={props.handleSubmit}
      values={props.values}
      errorMsg={props.errorMsg}
      errorSubmit={props.errorSubmit}
      message={props.message}
    />}
    <div className={styles.innerContainer}>
      {!props.filteredView ? <Categories
        handleFilterClick={props.handleFilterClick}
      /> :
      <FilteredView
        loaded={props.loaded}
        filter={props.filter}
        handleInputChange={props.handleInputChange}
        handleSubmitTags={props.handleSubmitTags}
      />
        }
    </div>
    {/* <AllServices
      allServices={props.allServices}
      loaded={props.loaded}
    /> */}
  </div>
);
ServicesPage.propTypes = {
  loaded: PropTypes.bool,
  // allServices: allServicesType,
  handleFormChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleFilterClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleClearAll: PropTypes.func,
  handleSubmitTags: PropTypes.func,
  values: serviceInfoType,
  expanded: PropTypes.bool,
  message: PropTypes.bool,
  errorSubmit: PropTypes.bool,
  errorMsg: PropTypes.objectOf(PropTypes.string),
  filter: filterType,
  filteredView: PropTypes.bool,
};
ServicesPage.defaultProps = {
  loaded: false,
  // allServices: null,
  handleFormChange: null,
  handleInputChange: null,
  handleFilterClick: null,
  handleClearAll: null,
  handleSubmit: null,
  handleSubmitTags: null,
  expanded: false,
  values: {},
  errorMsg: {},
  message: false,
  errorSubmit: false,
  filter: null,
  filteredView: false,
};
export default ServicesPage;

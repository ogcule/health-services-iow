import React from 'react';
import PropTypes from 'prop-types';
import Service from './Service';
import NoServices from './NoServices';
import styles from './styles/filterView.scss';
import { filterType } from './../../types/index';

const FilteredView = (props) => {
  if (!props.filter.loaded) {
    return <p>.....Loading</p>;
  }
  return (
    <div className={styles['filter-view-container']}>
      {props.filter.filteredServices.length === 0 ? <NoServices /> :
      props.filter.filteredServices.map(serviceInfo =>
        (<Service key={serviceInfo.id} serviceInfo={serviceInfo} />))
      }
    </div>
  );
};

FilteredView.propTypes = {
  filter: filterType,
  loaded: PropTypes.bool,
};
FilteredView.defaultProps = {
  filter: null,
  loaded: false,
};

export default FilteredView;

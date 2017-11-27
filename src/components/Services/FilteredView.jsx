import React from 'react';
import PropTypes from 'prop-types';
import Service from './Service';
import NoServices from './NoServices';
import FilterByTags from './FilterByTags';
import { filterType } from './../../types/index';

const FilteredView = (props) => {
  if (!props.filter.loaded) {
    return <p>.....Loading</p>;
  }
  return (
    <div>
      <FilterByTags
        filter={props.filter}
        handleInputChange={props.handleInputChange}
        handleSubmitTags={props.handleSubmitTags}
      />
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
  handleInputChange: PropTypes.func,
  handleSubmitTags: PropTypes.func,
};
FilteredView.defaultProps = {
  filter: null,
  loaded: false,
  handleInputChange: null,
  handleSubmitTags: null,
};

export default FilteredView;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import Service from './Service';
import { allServicesType } from './../../types/index';

const AllServices = (props) => {
  // Loading message when waiting for services from api call
  if (!props.loaded) {
    return <p>.....Loading</p>;
  }
  /* Have build in logic to deal with the default email and
  nhs choices link when service does not have this information */
  return (
    <div className={styles.servicesBox}>
      <div>
        {props.allServices.map(serviceInfo =>
        (
          <Service serviceInfo={serviceInfo} />
        ))}
      </div>
    </div>
  );
};
AllServices.propTypes = {
  loaded: PropTypes.bool,
  allServices: allServicesType,
};
AllServices.defaultProps = {
  loaded: false,
  allServices: null,
};

export default AllServices;

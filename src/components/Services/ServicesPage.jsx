import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import Subtitle from './../shared/Subtitle';
import AllServices from './AllServices';
import OpenFormBtn from './../shared/OpenFormBtn';
import ServiceForm from './ServiceForm';
import SuccessMessage from './../shared/SuccessMessage';
import ErrorMsg from './../shared/ErrorMsg';
import { allServicesType } from './../../types/index';

const ServicesPage = props => (
  <div className={styles.servicesBox}>
    <Subtitle subtitle="Services" />
    {props.errorSubmit && <ErrorMsg msg="Oops, error when trying to submit service!" />}
    {props.message && <SuccessMessage />}
    {!props.expanded ? <OpenFormBtn text="Add Service" openForm={props.handleFormChange} />
                            : <ServiceForm
                              closeForm={props.handleFormChange}
                              handleInputChange={props.handleInputChange}
                              handleSubmit={props.handleSubmit}
                              values={props.values}
                              errorMsg={props.errorMsg}
                            />
    }
    <AllServices
      allServices={props.allServices}
      loaded={props.loaded}
    />
  </div>
);
ServicesPage.propTypes = {
  loaded: PropTypes.bool,
  allServices: allServicesType,
  handleFormChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string),
  expanded: PropTypes.bool,
  message: PropTypes.bool,
  errorSubmit: PropTypes.bool,
  errorMsg: PropTypes.objectOf(PropTypes.string),
};
ServicesPage.defaultProps = {
  loaded: false,
  allServices: null,
  handleFormChange: null,
  handleInputChange: null,
  handleSubmit: null,
  expanded: false,
  values: {},
  errorMsg: {},
  message: false,
  errorSubmit: false,
};
export default ServicesPage;

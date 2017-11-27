import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import CloseFormBtn from './../shared/CloseFormBtn';
import ErrorMsg from './../shared/ErrorMsg';
import SuccessMessage from './../shared/SuccessMessage';
import TagsMenu from './TagsMenu';
import { categories, rcgpCurriculum } from './../../data/categories';
import { serviceInfoType } from './../../types/index';

const ServiceForm = props => (
  <div className={styles.transparentBg}>
    <div className={styles.formContainerServices}>
      <CloseFormBtn closeForm={props.closeForm} />
      {props.errorSubmit && <ErrorMsg msg="Oops, error when trying to submit service!" />}
      {props.message && <SuccessMessage />}
      <form method="post" onSubmit={props.handleSubmit} noValidate>
        <legend>Add a service</legend>
        <p className={styles.required}>* Required</p>
        <label htmlFor="category">
          <span className={styles.required}>*</span> Category:
        <select id="category" value={props.values.category} name="category" onChange={props.handleInputChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>))}
        </select>
        </label>
        <p>Hold the Ctrl key while clicking to select multiple tags (⌘-click on Mac).</p>
        <label htmlFor="tags">
          <span className={styles.required}>*</span> Tags:
        <TagsMenu values={props.values} handleInputChange={props.handleInputChange} />
        </label>
        {props.errorMsg.tags && <ErrorMsg msg={props.errorMsg.tags} />}
        <label htmlFor="rcgp">
          <span className={styles.required}>*</span> Category (RCGP):
      <select id="rcgp" name="rcgpCategory" value={props.values.rcgpCategory} onChange={props.handleInputChange}>
        {rcgpCurriculum.map(heading => (
          <option key={Object.keys(heading)[0]} value={heading[Object.keys(heading)[0]]}>
            {heading[Object.keys(heading)[0]]}
          </option>))}
      </select>
        </label>
        <label htmlFor="name">
          <span className={styles.required}>*</span> Name of Service:
          <input id="name" name="name" type="text" value={props.values.name} onChange={props.handleInputChange} />
        </label>
        {props.errorMsg.name && <ErrorMsg msg={props.errorMsg.name} />}
        <label htmlFor="description">
          <span className={styles.required}>*</span> Description of Service:
          <textarea id="description" name="description" type="text" value={props.values.description} onChange={props.handleInputChange} />
        </label>
        {props.errorMsg.description && <ErrorMsg msg={props.errorMsg.description} />}
        <label htmlFor="referral">
          Referral:
          <textarea id="referral" name="referral" type="text" value={props.values.referral} onChange={props.handleInputChange} placeholder="Referral pathway" />
        </label>
        <label htmlFor="address">
          Address:
          <textarea id="address" name="address" type="text" value={props.values.address} onChange={props.handleInputChange} />
        </label>
        <label htmlFor="postcode">
          <span className={styles.required}>*</span>Postcode:
          <input id="postcode" name="postcode" type="text" value={props.values.postcode} onChange={props.handleInputChange} />
        </label>
        {props.errorMsg.postcode && <ErrorMsg msg={props.errorMsg.postcode} />}
        <label htmlFor="telephone">
          <span className={styles.required}>*</span> Telephone:
          <input id="telephone" name="telephone" type="tel" value={props.values.telephone} onChange={props.handleInputChange} />
        </label>
        {props.errorMsg.telephone && <ErrorMsg msg={props.errorMsg.telephone} />}
        <label htmlFor="email">
          E-mail:
          <input id="email" type="email" name="email" value={props.values.email} placeholder="service@domain.com" onChange={props.handleInputChange} />
        </label>
        {props.errorMsg.email && <ErrorMsg msg={props.errorMsg.email} />}
        <label htmlFor="weblink">
          Web address:
          <input id="weblink" type="url" name="weblink" value={props.values.weblink} placeholder="https://www.servicewebsite.com" onChange={props.handleInputChange} />
        </label>
        {props.errorMsg.weblink && <ErrorMsg msg={props.errorMsg.weblink} />}
        <div className={styles.formBtn}>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  </div>
);
ServiceForm.propTypes = {
  closeForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  values: serviceInfoType,
  errorMsg: PropTypes.objectOf(PropTypes.string),
  errorSubmit: PropTypes.bool,
  message: PropTypes.bool,
};
ServiceForm.defaultProps = {
  closeForm: null,
  handleSubmit: null,
  handleInputChange: null,
  values: {},
  errorMsg: {},
  errorSubmit: false,
  message: false,
};
export default ServiceForm;

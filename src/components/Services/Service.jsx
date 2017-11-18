import React from 'react';
import styles from './services.scss';
import linkImg from '../../images/link.png';
import { serviceInfoType } from './../../types/index';

const Service = (props) => {
  const {
    id, name, category, description, image, link, email, telephone, address, rcgp, postcode,
  } = props.serviceInfo;
  return (
    <div key={id} data-id={id} className={styles.serviceContainer}>
      <div className={styles.serviceInfo}>
        <ul className={styles.service}>
          <li className={styles.serviceHeading}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </li>
          <li className={styles.description}>
            {description}
          </li>
          <li><span>Category:</span>{category}</li>
          <li><span>RCGP Curriculum:</span>{rcgp}</li>
        </ul>
      </div>
      <div className={styles.serviceContact}>
        <ul className={styles.contactDetails}>
          <li><h3>Contact details</h3></li>
          <li><span>Address:</span>{address}</li>
          <li><span>Postcode:</span>{postcode}</li>
          <li><span>Tel:</span>{telephone}</li>
          <li>
            <span>
              Email:
            </span>
            <a href={`mailto:${email}`} target="_blank">
              {email === 'noemail@nomail.invalid' ? 'not available' : email}
            </a>
          </li>
          <li>
            <span>
              <img src={linkImg} alt="web link" />
            </span>
            <a href={link} target="_blank">
              {link === 'https://www.nhs.uk/' ? 'nhs choices' : name}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
Service.propTypes = {
  serviceInfo: serviceInfoType,
};
Service.defaultProps = {
  serviceInfo: null,

};

export default Service;

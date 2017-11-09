import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import linkImg from '../../images/link.png';

const ServicesTable = (props) => {
  // Loading message when waiting for services from api call
  if (!props.loaded) {
    return <p>.....Loading</p>;
  }
  /* Have build in logic to deal with the default email and
  nhs choices link when service does not have this information */
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>Service</th>
          <th>Contact details</th>
          <th>Category</th>
          <th>RCGP Category</th>
        </tr>
      </thead>
      <tbody>
        {props.allServices.map((obj) => {
          const {
            id, name, category, description, image, link, email, telephone, address, rcgp, postcode,
          } = obj;
          return (
            <tr key={id} data-id={id}>
              <td><img src={image} alt={name} /></td>
              <td>
                <ul className={styles.services}>
                  <li><span>{name}</span><hr /></li>
                  <li>{description}</li>
                </ul>
              </td>
              <td>
                <ul className={styles.services}>
                  <li><span>Address:</span> {address}</li>
                  <li><span>postcode:</span>{postcode}</li>
                  <li><span>Tel:</span> {telephone}</li>
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
                      :
                    </span>
                    <a href={link} target="_blank">
                      {link === 'https://www.nhs.uk/' ? 'nhs choices' : name}
                    </a>
                  </li>
                </ul>
              </td>
              <td>{category}</td>
              <td>{rcgp}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
ServicesTable.propTypes = {
  loaded: PropTypes.bool,
  allServices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    address: PropTypes.string,
  })),
};
ServicesTable.defaultProps = {
  loaded: false,
  allServices: null,
};

export default ServicesTable;

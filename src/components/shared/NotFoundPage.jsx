import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './shared.scss';

const NotFoundPage = ({ location }) => (
  <div className={styles.notFound}>
    <h1>404</h1>
    <h2>.. Can not find page
      <code>
        {location.pathname}
      </code>
      !
    </h2>
    <p>
      <Link to="/">Go back to main page</Link>
    </p>
  </div>
);

NotFoundPage.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

NotFoundPage.defaultProps = {
  location: {
    pathname: '',
  },
};

export default NotFoundPage;

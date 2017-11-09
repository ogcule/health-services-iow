import React from 'react';
import PropTypes from 'prop-types';
import styles from './shared.scss';

const Subtitle = props => <h2 className={styles.subtitle}>{props.subtitle}</h2>;

Subtitle.propTypes = {
  subtitle: PropTypes.string,
};
Subtitle.defaultProps = {
  subtitle: 'Subtitle',
};

export default Subtitle;

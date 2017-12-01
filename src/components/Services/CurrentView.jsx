import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/currentView.scss';
import { filterType } from './../../types/index';

const CurrentView = (props) => {
  const container = (props.filter.category || props.filter.tags) ?
    'breadcrumbs-trail-container' :
    'breadcrumbs-container';

  return (
    <div className={styles['outer-container']}>
      <div className={styles[container]}>
        {props.children[0]}
        {props.filter.category &&
          <h2 className={styles.category}>{'> '}<a>{props.filter.category}</a></h2>}
        {props.filter.tags && <h2 className={styles.tag}>{'> '}<a>{props.filter.tags}</a></h2>}
      </div>
      {props.children[1]}
    </div>
  );
};

CurrentView.propTypes = {
  children: PropTypes.node,
  filter: filterType,
};
CurrentView.defaultProps = {
  children: null,
  filter: null,
};
export default CurrentView;

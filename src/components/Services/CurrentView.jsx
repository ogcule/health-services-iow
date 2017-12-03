import React from 'react';
import { func, node } from 'prop-types';
import styles from './styles/currentView.scss';
import { filterType } from './../../types/index';

const CurrentView = (props) => {
  const container = (props.filter.category || props.filter.tags) ?
    'breadcrumbs-trail-container' :
    'breadcrumbs-container';

  return (
    <div className={styles['outer-container']}>
      <div className={styles[container]}>
        {((!props.filter.category) && (!props.filter.tags)) && props.children}
        {props.filter.category &&
          <button className={styles['cat-btn']} data-category={props.filter.category} onClick={props.handleFilterClick}>
            {`> ${props.filter.category}`}
          </button>}
        {props.filter.tags && <h2 className={styles.tag}>{'> Tags: '}{props.filter.tags}</h2>}
      </div>
    </div>
  );
};

CurrentView.propTypes = {
  children: node,
  handleFilterClick: func,
  filter: filterType,
};
CurrentView.defaultProps = {
  children: null,
  handleFilterClick: null,
  filter: null,
};
export default CurrentView;

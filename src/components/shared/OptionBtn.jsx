import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/optionBtn.scss';

const OptionBtn = props => (
  <div className={styles['btn-div']}>
    <p>{props.text}</p>
    <button onClick={props.clickHandler}>
      {!props.active && <img src={props.image[0]} alt="button" />}
      {props.active && <img src={props.image[1]} alt="button" />}
    </button>
  </div>
);
OptionBtn.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  active: PropTypes.bool,
  clickHandler: PropTypes.func,
};
OptionBtn.defaultProps = {
  image: [],
  text: '',
  active: false,
  clickHandler: null,
};
export default OptionBtn;

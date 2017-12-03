import React from 'react';
import { string, func, bool } from 'prop-types';
import styles from './styles/optionBtn.scss';
import images from './../../utils/images';

const OptionBtn = props => (
  <div className={styles['btn-div']}>
    <p>{props.text}</p>
    <button onClick={props.clickHandler}>
      {props.active ? <img src={images.closeIcon} alt="close" />
                    : <img src={props.image} alt="icon" />}
    </button>
  </div>
);
OptionBtn.propTypes = {
  image: string,
  text: string,
  clickHandler: func,
  active: bool,
};
OptionBtn.defaultProps = {
  image: '',
  text: '',
  clickHandler: null,
  active: false,
};
export default OptionBtn;

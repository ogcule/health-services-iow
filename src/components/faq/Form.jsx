import React from 'react';
import PropTypes from 'prop-types';
import styles from './faq.scss';
import ErrorMsg from './../shared/ErrorMsg';
import CloseFormBtn from './../shared/CloseFormBtn';

const Form = props => (
  <div className={styles.formContainerFaq}>
    <CloseFormBtn closeForm={props.closeForm} />
    {props.errorSubmit && <ErrorMsg msg="Oops, error when trying to submit!" />}
    <form method="post" className={styles.formBox} onSubmit={props.handleSubmit} noValidate>
      <legend>Add a new frequently asked question</legend>
      <div className={styles.formRow}>
        <label htmlFor="question">
          New Question
          <input name="question" type="text" id="question" value={props.valueQuestion} onChange={props.handleInputChange} />
          {props.errorQuestion && <ErrorMsg msg={props.errorQuestion} />}
        </label>
      </div>
      <div className={styles.formRow}>
        <label htmlFor="answer">
          Answer
          <textarea name="answer" type="text" id="answer" value={props.valueAnswer} onChange={props.handleInputChange} />
          {props.errorAnswer && <ErrorMsg msg={props.errorAnswer} />}
        </label>
      </div>
      <div className={styles.formBtn}>
        <button type="submit" >Submit</button>
      </div>
    </form>
  </div>
);
// propTypes and defaultProps
Form.propTypes = {
  closeForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorQuestion: PropTypes.string,
  valueQuestion: PropTypes.string,
  valueAnswer: PropTypes.string,
  handleInputChange: PropTypes.func,
  errorAnswer: PropTypes.string,
  errorSubmit: PropTypes.bool,
};
Form.defaultProps = {
  closeForm: null,
  handleSubmit: null,
  errorQuestion: null,
  valueQuestion: null,
  valueAnswer: null,
  handleInputChange: null,
  errorAnswer: null,
  errorSubmit: false,
};

CloseFormBtn.propTypes = {
  closeForm: PropTypes.func,
};
CloseFormBtn.defaultProps = {
  closeForm: function defaultfn() {},
};

export default Form;

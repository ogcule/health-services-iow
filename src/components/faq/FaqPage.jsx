import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';
import styles from './faq.scss';
import FormContainer from './containers/FormContainer';
import Subtitle from './../shared/Subtitle';
import OpenFormBtn from './../shared/OpenFormBtn';

const FaqPage = props => (
  <div className={styles.faqBox}>
    <Subtitle subtitle="Frequently asked questions" />
    {!props.expanded ? <OpenFormBtn text="Add Question" openForm={props.handleFormChange} />
                            : <FormContainer
                              addMessage={props.addMessage}
                              updateQuestions={props.updateQuestions}
                              closeForm={props.handleFormChange}
                            />
    }
    <Questions
      messageShown={props.messageShown}
      questions={props.questions}
      loaded={props.loaded}
    />
  </div>
);

FaqPage.propTypes = {
  messageShown: PropTypes.bool,
  expanded: PropTypes.bool,
  loaded: PropTypes.bool,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
  })),
  handleFormChange: PropTypes.func,
  addMessage: PropTypes.func,
  updateQuestions: PropTypes.func,
};
FaqPage.defaultProps = {
  messageShown: false,
  expanded: false,
  loaded: false,
  questions: {},
  handleFormChange: null,
  addMessage: null,
  updateQuestions: null,
};
OpenFormBtn.propTypes = {
  openForm: PropTypes.func,
};
OpenFormBtn.defaultProps = {
  openForm: null,
};

export default FaqPage;

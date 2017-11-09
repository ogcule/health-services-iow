import React from 'react';
import PropTypes from 'prop-types';
import styles from './faq.scss';
// stateless component that adds message when new FAQ added.
// I need to make this go away, either by clicking on it or timed
const AddMessage = () => <li className={styles.message}>Thank you for adding a new entry</li>;
// component for displaying the frequently asked questions
const Questions = (props) => {
  if (!props.loaded) {
    return <p>.....Loading</p>;
  }
  return (
    <ul className={styles.questions}>
      {props.messageShown && <AddMessage /> }
      {props.questions.map((obj) => {
        const { id, question, answer } = obj;
        return (
          <ul key={id} data-id={id}>
            <li className={styles.liHeading}>{question}<hr /></li>
            <li className={styles.liAnswer}>{answer}</li>
          </ul>
        );
      })}
    </ul>
  );
};
Questions.propTypes = {
  messageShown: PropTypes.bool,
  loaded: PropTypes.bool,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
  })),
};
Questions.defaultProps = {
  messageShown: false,
  loaded: false,
  questions: [{ id: 0, question: 'What happens if there is an error getting your information?', answer: 'You get this message' }],
};
export default Questions;

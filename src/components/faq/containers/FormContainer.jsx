import React from 'react';
import PropTypes from 'prop-types';
import apiFaq from './../../../api/apiFaq';
import Form from './../Form';

// component with the form to submit new question and answers to the database
class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      errorSubmit: false,
      errorMsg: {
        answer: '',
        question: '',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handler for changing state from input values on the form
  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      // computed property name
      [name]: value,
    });
  }
  // handler for submit event from the form, this then does a post request to the api
  handleSubmit(event) {
    event.preventDefault();
    apiFaq.requestPost(this.state.question, this.state.answer)
      .then((data) => {
        console.log('data from post request:', data);
        const { answer = '', question = '' } = data;
        this.setState({
          errorMsg: {
            question,
            answer,
          },
        });
        if ((this.state.errorMsg.answer === '') && (this.state.errorMsg.question === '')) {
          // shows thank you message for set time and updates questions
          this.props.addMessage();
          setTimeout(() => { this.props.addMessage(); }, 3000);
          this.props.updateQuestions();
        }
      })
      .catch(() => {
        this.setState({
          errorSubmit: true,
        });
      });
  }
  render() {
    return (
      <Form
        closeForm={this.props.closeForm}
        handleSubmit={this.handleSubmit}
        errorQuestion={this.state.errorMsg.question}
        valueQuestion={this.state.question}
        valueAnswer={this.state.answer}
        handleInputChange={this.handleInputChange}
        errorAnswer={this.state.errorMsg.answer}
        errorSubmit={this.state.errorSubmit}
      />
    );
  }
}
FormContainer.propTypes = {
  closeForm: PropTypes.func,
  addMessage: PropTypes.func,
  updateQuestions: PropTypes.func,
};
FormContainer.defaultProps = {
  closeForm: null,
  addMessage: null,
  updateQuestions: null,
};
export default FormContainer;

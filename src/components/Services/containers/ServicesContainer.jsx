import React from 'react';
import ServicesPage from './../ServicesPage';
import apiServices from './../../../api/apiServices';
import defaultFormValues from './../../../utils/defaultFormValues';

class ServicesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allServices: {},
      loaded: false,
      expanded: false,
      message: false,
      errorSubmit: false,
      filteredView: false,
      filter: {
        category: '',
        filteredServices: [],
      },
      values: {
        image: '',
        rcgpCategory: 'Healthy People',
        category: 'Community',
        name: '',
        description: '',
        address: '',
        telephone: '',
        email: '',
        weblink: '',
        postcode: '',
        tags: 'Cardiovascular Health',
      },
      errorMsg: {
        name: '',
        description: '',
        telephone: '',
        postcode: '',
        email: '',
        weblink: '',
        image: '',
      },
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleClearErrorMsg = this.handleClearErrorMsg.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }
  componentDidMount() {
    // this.getAllServices();
  }
  // function that call that gets all service information
  getAllServices() {
    apiServices.requestGetAll()
      .then((data) => {
        if (data) {
          this.setState({
            allServices: data,
            loaded: true,
          });
        } else {
          this.setState({
            loaded: false,
          });
        }
      });
  }
  // handler to change state for expanding the questions form
  handleFormChange() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
  // handler to change success message
  handleMessageChange() {
    this.setState(prevState => ({ message: !prevState.message }));
  }
  handleFilterChange() {
    this.setState(prevState => ({ filteredView: !prevState.filteredView }));
  }
  handleFilterClick(e) {
    e.preventDefault();
    const { target } = e;
    const category = target.getAttribute('data-category');
    apiServices.requestGetCategory(category)
      .then((data) => {
        console.log(data);
        this.setState({
          loaded: true,
          filter: {
            filteredServices: data,
            category,
          },
        });
      });
    this.handleFilterChange();
  }
  // handler for changing state from input values on the form
  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;
    /* using previousState  */
    this.setState(prevState => (
      { values: Object.assign({}, prevState.values, { [name]: value }) }
    ));
  }
  handleClearAll() {
    this.setState({
      values: {
        image: '',
        rcgpCategory: 'Healthy People',
        category: 'Community',
        name: '',
        description: '',
        address: '',
        telephone: '',
        email: '',
        weblink: '',
        postcode: '',
        tags: '',
      },
      filter: {
        category: '',
        filteredServices: [],
      },
      errorMsg: {
        name: '',
        description: '',
        telephone: '',
        postcode: '',
        email: '',
        weblink: '',
        image: '',
      },
      filteredView: false,
      loaded: false,
    });
  }
  handleClearForm() {
    this.setState({
      values: {
        image: '',
        rcgpCategory: 'Healthy People',
        category: 'Community',
        name: '',
        description: '',
        address: '',
        telephone: '',
        email: '',
        weblink: '',
        postcode: '',
        tags: 'Cardiovascular Health',
      },
    });
  }
  handleClearErrorMsg() {
    this.setState({
      errorMsg: {
        name: '',
        description: '',
        telephone: '',
        postcode: '',
        email: '',
        weblink: '',
        image: '',
      },
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    apiServices.requestPost(...defaultFormValues(this.state.values))
      .then((data) => {
        console.log('Response data from submit call in ServicesContainer', data);
        /* data from requstPost is either an error message(object)
        or returned id number if successful */
        if (typeof data !== 'number') {
          /* destructuring from data object and giving
          default value of '' when error message is not present */
          const {
            name = '',
            description = '',
            telephone = '',
            postcode = '',
            email = '',
            weblink = '',
            image = '',
          } = data;
          this.setState({
            errorMsg: {
              // shorthand
              name,
              description,
              telephone,
              postcode,
              email,
              weblink,
              image,
            },
          });
          return this.state.errorMsg;
        }
        return data;
      })
      .then((results) => {
        /* if id (number) returned then successful submission
        and can reload services and clear form, show message */
        if (typeof results === 'number') {
          this.handleClearForm();
          this.handleClearErrorMsg();
          this.handleMessageChange();
          setTimeout(() => {
            this.handleMessageChange();
          }, 3000);
        }
      })
      .catch((error) => {
        this.setState({
          errorSubmit: true,
        });
        console.log(error);
      });
  }
  render() {
    return (
      <ServicesPage
        allServices={this.state.allServices}
        loaded={this.state.loaded}
        expanded={this.state.expanded}
        handleFormChange={this.handleFormChange}
        handleInputChange={this.handleInputChange}
        handleFilterClick={this.handleFilterClick}
        handleFilterChange={this.handleFilterChange}
        handleClearAll={this.handleClearAll}
        message={this.state.message}
        handleSubmit={this.handleSubmit}
        values={this.state.values}
        errorMsg={this.state.errorMsg}
        errorSubmit={this.state.errorSubmit}
        filter={this.state.filter}
        filteredView={this.state.filteredView}
      />
    );
  }
}

export default ServicesContainer;

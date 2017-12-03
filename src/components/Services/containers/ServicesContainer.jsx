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
      displayCategories: false,
      tagMenu: false,
      filter: {
        category: '',
        tags: '',
        filteredServices: [],
        search: '',
        loaded: false,
        filteredView: false,
        searchErr: false,
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
        tags: [],
        referral: '',
      },
      errorMsg: {
        name: '',
        description: '',
        telephone: '',
        postcode: '',
        email: '',
        weblink: '',
        image: '',
        tags: '',
      },
      menuOverlay: false,
      searchBox: true,
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
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleDisplayCategories = this.handleDisplayCategories.bind(this);
    this.handleTagMenu = this.handleTagMenu.bind(this);
    this.handleMenuOverlayChange = this.handleMenuOverlayChange.bind(this);
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
  }

  getFilteredCategory(category, tags) {
    apiServices.requestGetCategory(category)
      .then((data) => {
        console.log(data);
        this.setState(prevState => ({
          filter: Object.assign(
            {},
            prevState.filter,
            {
              filteredServices: data,
              category,
              tags,
              loaded: true,
            },
          ),
        }));
      });
  }
  getFilteredTags(tags) {
    apiServices.requestGetTags(tags)
      .then((data) => {
        console.log('tag', data);
        this.setState(prevState => ({
          filter: Object.assign(
            {},
            prevState.filter,
            {
              filteredServices: data,
              tags,
              loaded: true,
              filteredView: true,
            },
          ),
          searchBox: false,
        }));
      });
  }
  getFilteredBoth(category, tags) {
    apiServices.requestGetBoth(category, tags)
      .then((data) => {
        console.log('both', data);
        this.setState(prevState => ({
          filter: Object.assign(
            {},
            prevState.filter,
            {
              filteredServices: data,
              tags,
              category,
              loaded: true,
              filteredView: true,
            },
          ),
          searchBox: false,
        }));
      })
      .catch(err => console.log(err.message));
  }
  handleDisplayCategories() {
    this.setState(prevState => ({ displayCategories: !prevState.displayCategories }));
  }
  handleTagMenu() {
    this.setState(prevState => ({ tagMenu: !prevState.tagMenu }));
  }
  // handler to change state for expanding the questions form
  handleFormChange() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
  // handler to change success message
  handleMessageChange() {
    this.setState(prevState => ({ message: !prevState.message }));
  }
  handleMenuOverlayChange() {
    this.setState(prevState => ({ menuOverlay: !prevState.menuOverlay }));
    console.log('MenuOverlay');
  }
  handleSearchBoxChange() {
    this.setState(prevState => ({
      filter: Object.assign(
        {},
        prevState.filter,
        {
          filteredView: false,
          category: '',
          tags: '',
        },
      ),
      searchBox: true,
    }));
  }
  // handler to change the filtered view on and off
  handleFilterChange() {
    console.log('filter Change before', this.state.filter.filteredView);
    this.setState(prevState => ({
      filter: Object.assign(
        {},
        prevState.filter,
        {
          filteredView: !prevState.filteredView,
        },
      ),
    }));
    console.log('Filter after change call: ', this.state.filter.filteredView);
  }
  /* handler for calling a get request for all services by category
  when a click event occurs */
  handleFilterClick(e) {
    e.preventDefault();
    console.log('filter click');
    const { target } = e;
    const category = target.getAttribute('data-category');
    /* Pass in empty string parameter to reset tags. when
    category is selected. */
    this.getFilteredCategory(category, '');
    this.handleFilterChange();
    this.setState({
      searchBox: false,
    });
  }
  handleSearchClick(e) {
    e.preventDefault();
    if (this.state.filter.search) {
      apiServices.requestGetSearch(this.state.filter.search)
        .then((data) => {
          console.log(data);
          this.setState(prevState => ({
            filter: Object.assign(
              {},
              prevState.filter,
              {
                filteredServices: data,
                loaded: true,
                filteredView: true,
              },
            ),
            menuOverlay: false,
            searchBox: false,
          }));
        })
        .catch(err => console.log(err.message));
    } else {
      this.setState(prevState => ({
        filter: Object.assign(
          {},
          prevState.filter,
          {
            searchErr: true,
          },
        ),
      }));
    }
  }
  // handler for changing state from input values on the forms
  handleInputChange(e) {
    e.preventDefault();
    const { target } = e;
    const {
      value, name, type, options, dataset,
    } = target;
    /* switch to deal with multiple cases because onChange is also
    submitting on the select Menu */
    switch (true) {
      case (dataset.forms === 'getTags') && (value === '') && (dataset.category !== ''):
        this.getFilteredCategory(dataset.category, value);
        break;
      case (dataset.forms === 'getTags') && (value === ''):
        this.setState(prevState => ({
          filter: Object.assign(
            {},
            prevState.filter,
            {
              filteredView: false,
              tags: value,
            },
          ),
        }));
        break;
      case (dataset.forms === 'getTags') && (dataset.category === ''):
        this.getFilteredTags(value);
        break;
      case (dataset.forms === 'getTags') && (dataset.category !== ''):
        this.getFilteredBoth(dataset.category, value);
        break;
      case dataset.forms === 'search':
        console.log('search called');
        this.setState(prevState => (
          { filter: Object.assign({}, prevState.filter, { [name]: value }) }
        ));
        break;
      case type === 'select-multiple': {
        const selectedOptions = [];
        Object.values(options).map((option) => {
          console.log(option.selected);
          if (option.selected) {
            selectedOptions.push(option.value);
          }
          return selectedOptions;
        });
        this.setState(prevState => (
          { values: Object.assign({}, prevState.values, { [name]: selectedOptions }) }
        ));
        break;
      }
      default:
        this.setState(prevState => (
          { values: Object.assign({}, prevState.values, { [name]: value }) }
        ));
    }
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
        tags: [],
        referral: '',
      },
      filter: {
        category: '',
        tags: '',
        filteredServices: [],
        filteredView: false,
        loaded: false,
        searchErr: false,
      },
      errorMsg: {
        name: '',
        description: '',
        telephone: '',
        postcode: '',
        email: '',
        weblink: '',
        image: '',
        tags: '',
      },
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
        tags: [],
        referral: '',
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
        tags: '',
      },
      errorSubmit: false,
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
            tags = '',
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
              tags,
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
          if (this.state.filter.category) {
            this.getFilteredCategory(this.state.filter.category);
          }
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
        handleMenuOverlayChange={this.handleMenuOverlayChange}
        handleSubmitTags={this.handleSubmitTags}
        handleClearAll={this.handleClearAll}
        handleSearchClick={this.handleSearchClick}
        handleDisplayCategories={this.handleDisplayCategories}
        handleSearchBoxChange={this.handleSearchBoxChange}
        handleTagMenu={this.handleTagMenu}
        message={this.state.message}
        handleSubmit={this.handleSubmit}
        values={this.state.values}
        errorMsg={this.state.errorMsg}
        errorSubmit={this.state.errorSubmit}
        filter={this.state.filter}
        filteredView={this.state.filteredView}
        displayCategories={this.state.displayCategories}
        tagMenu={this.state.tagMenu}
        menuOverlay={this.state.menuOverlay}
        searchBox={this.state.searchBox}
      />
    );
  }
}

export default ServicesContainer;

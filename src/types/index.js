// centalise PropTypes
import PropTypes from 'prop-types';

const {
  shape, number, string, arrayOf, bool, oneOfType,
} = PropTypes;
// destructuring to shorten declarations
const allServicesType = arrayOf(shape({
  id: number,
  name: string,
  category: string,
  description: string,
  image: string,
  link: string,
  email: string,
  telephone: string,
  address: string,
  rcgp: string,
  postcode: string,
  linkImg: string,
  tags: oneOfType([
    string,
    arrayOf(string),
  ]),
  referral: string,
}));

const serviceInfoType = shape({
  id: number,
  name: string,
  category: string,
  description: string,
  image: string,
  link: string,
  email: string,
  telephone: string,
  address: string,
  rcgp: string,
  postcode: string,
  linkImg: string,
  tags: oneOfType([
    string,
    arrayOf(string),
  ]),
  referral: string,
});

const filterType = shape({
  category: string,
  tags: string,
  loaded: bool,
  filteredServices: arrayOf(shape({
    id: number,
    name: string,
    category: string,
    description: string,
    image: string,
    link: string,
    email: string,
    telephone: string,
    address: string,
    rcgp: string,
    postcode: string,
    linkImg: string,
    tags: oneOfType([
      string,
      arrayOf(string),
    ]),
    referral: string,
  })),
});

const handleClearAllType = shape({
  values: shape({
    image: string,
    rcgpCategory: string,
    category: string,
    name: string,
    description: string,
    address: string,
    telephone: string,
    email: string,
    weblink: string,
    postcode: string,
    tags: oneOfType([
      string,
      arrayOf(string),
    ]),
    referral: string,
  }),
  filter: shape({
    category: string,
    tags: string,
    search: string,
    filteredView: bool,
    searchErr: bool,
    filteredServices: arrayOf(shape({
      id: number,
      name: string,
      category: string,
      description: string,
      image: string,
      link: string,
      email: string,
      telephone: string,
      address: string,
      rcgp: string,
      postcode: string,
      linkImg: string,
      tags: oneOfType([
        string,
        arrayOf(string),
      ]),
      referral: string,
    })),
  }),
  errorMsg: shape({
    name: string,
    description: string,
    telephone: string,
    postcode: string,
    email: string,
    weblink: string,
    image: string,
    tags: string,
  }),
  filteredView: bool,
  loaded: bool,
});

export { allServicesType, serviceInfoType, filterType, handleClearAllType };

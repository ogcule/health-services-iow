// centalise PropTypes
import PropTypes from 'prop-types';

const {
  shape, number, string, arrayOf,
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
});

export { allServicesType, serviceInfoType };

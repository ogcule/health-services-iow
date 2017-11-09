import axios from 'axios';
import querystring from 'querystring';

export default {
  requestGetAll() {
    return axios.get('http://localhost:3000/service')
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  requestPost(
    name,
    category,
    description,
    image,
    weblink,
    email,
    telephone,
    address,
    rcgpCategory,
    postcode,
  ) {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/service',
      data: querystring.stringify({
        name,
        category,
        description,
        image,
        weblink,
        email,
        telephone,
        address,
        rcgpCategory,
        postcode,
        // property shorthand
      }),
    })
      .then(response => response.data)
      .catch((error) => {
        const errorMsgs = {};
        Object.keys(error.response.data.error).map((val) => {
          errorMsgs[val] = error.response.data.error[val].msg;
          return errorMsgs;
        });
        return errorMsgs;
      });
  },
};

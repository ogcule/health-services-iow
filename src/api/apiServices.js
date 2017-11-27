import axios from 'axios';
import querystring from 'querystring';

export default {
  requestGetAll() {
    return axios.get('/api/service/')
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  requestGetTags(tag) {
    console.log(tag);
    return axios.get(`/api/service/tags/${tag}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  requestGetBoth(category, tag) {
    return axios.get(`/api/service/categories/${category}/tags/${tag}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  requestGetCategory(category) {
    return axios.get(`/api/service/categories/${category}`)
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
    tags,
    referral,
  ) {
    return axios({
      method: 'post',
      url: '/api/service/',
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
        tags,
        referral,
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

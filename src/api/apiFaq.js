import axios from 'axios';
import querystring from 'querystring';

export default {
  requestPost(question, answer) {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/faq',
      data: querystring.stringify({
        question, // property shorthand
        answer, // property shorthand
      }),
    })
      .then(response => response.data.id)
      .catch((error) => {
        const errorMsgs = {};
        Object.keys(error.response.data.error).map((name) => {
          errorMsgs[name] = error.response.data.error[name].msg;
          return errorMsgs;
        });
        return errorMsgs;
      });
  },
  requestGet() {
    return axios.get('http://localhost:3000/faq')
      .then(response => response.data)
      .catch(error => console.log(error));
  },

};

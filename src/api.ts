import axios from 'axios';

const ApiService = {
  init() {
    axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/';
  },

  getMovies() {
    return axios.get('movies').then((res) => res.data);
  },
};

export default ApiService;

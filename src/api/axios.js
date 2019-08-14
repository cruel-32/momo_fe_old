import * as axios from 'axios';
axios.defaults.baseURL = 'http://localhost:12354';
// axios.defaults.baseURL = 'https://momoapps.herokuapp.com';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

export default axios
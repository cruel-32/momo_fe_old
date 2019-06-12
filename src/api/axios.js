import * as axios from 'axios';
axios.defaults.baseURL = 'http://localhost:12354';
// axios.defaults.baseURL = 'https://easytogether.herokuapp.com';
axios.defaults.headers['content-type'] = 'application/json';

axios.interceptors.request.use(config=> {
    let access_token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
    config.headers['access_token'] = access_token ? JSON.parse(access_token) : '';
    return config;
}, error=> Promise.reject(error));


axios.interceptors.response.use(response=>{
    const {access_token} = response.data;
    if(access_token){
        localStorage.setItem('access_token', JSON.stringify(access_token));
    }
    return response;
}, error=> Promise.reject(error));



export default axios
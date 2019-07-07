import * as axios from 'axios';
axios.defaults.baseURL = 'http://localhost:12354';
// axios.defaults.baseURL = 'https://momoapps.herokuapp.com';
axios.defaults.headers['content-type'] = 'application/json';

axios.interceptors.request.use(config=> {
    let account = localStorage.getItem('account') || sessionStorage.getItem('account');
    if(account){
        config.headers['access_token'] = JSON.parse(account).access_token || '';
    }
    return config;
}, error=> Promise.reject(error));

// axios.interceptors.response.use(response=>{
//     const {access_token} = response.data;
//     if(access_token){
//         localStorage.setItem('access_token', JSON.stringify(access_token));
//     }
//     return response;
// }, error=> Promise.reject(error));

export default axios
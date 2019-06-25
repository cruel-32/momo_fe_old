import axios from './axios';
const url = '/api/accounts';

export const login = params => axios.post(`${url}/auth`, params)
export const logout = params => axios.delete(`${url}`,params)
export const join = params => axios.post(`${url}`,params)


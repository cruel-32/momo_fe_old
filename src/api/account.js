import axios from './axios';
const url = '/api/accounts';

export const login = params => axios.post(`${url}/auth`, params)
export const logout = () => axios.delete(`${url}`)
export const join = params => axios.post(`${url}`,params)


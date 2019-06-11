import axios from './axios';
const url = '/api/accounts/auth';

export const login = params => axios.post(`${url}`, params)
export const logout = params => axios.delete(`${url}`,params)


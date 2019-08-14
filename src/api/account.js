import axios from './axios';
const url = '/api/accounts';

export const login = params => axios.post(`${url}/auth`, params)
export const logout = () => axios.delete(`${url}`)
export const join = params => axios.post(`${url}`,params)

export const createEvent = params => axios.post(`http://localhost:12354/api/togethers/5d21900d0b1d6d4cac321b79/`,params)
export const deleteEvent = params => axios.delete(`http://localhost:12354/api/togethers/5d21900d0b1d6d4cac321b79`,params)

// export const createEvent = params => axios.post(`https://momoapps.herokuapp.com/api/togethers/5d21900d0b1d6d4cac321b79/`,params)
// export const deleteEvent = params => axios.delete(`https://momoapps.herokuapp.com/api/togethers/5d21900d0b1d6d4cac321b79`,params)
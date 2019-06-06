import axios from './axios';
const url = '/api/meeting';

export const getMeetings = params => axios.get(`${url}`, params)
export const postMeeting = params => axios.post(`${url}`,params)
export const getMeeting = _id => axios.get(`${url}/${_id}`)
export const putMeeting = (_id,params) => axios.put(`${url}/${_id}`,params)
export const patchMeeting = (_id,params) => axios.patch(`${url}/${_id}`,params)


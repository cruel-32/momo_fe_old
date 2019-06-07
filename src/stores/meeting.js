import { observable, action } from 'mobx';
import {
  getMeetings,
  postMeeting,
  getMeeting,
  putMeeting,
  patchMeeting,
} from 'api/meeting';

console.log("getMeetings : ", getMeetings);
console.log("postMeeting : ", postMeeting);
console.log("getMeeting : ", getMeeting);

export default class CategoryStore {
  @observable meetings = [];
  @observable meeting = null;

  constructor(root) {
    this.root = root;
  }
  
  @action
  getMeeting = async _id => {
    const {data} = await getMeeting(_id);
    this.meeting = data;
  };

  @action
  getMeetings = async (params={}) => {
    const {data} = await getMeetings(params);
    this.meetings = data;
  };
  
  @action
  createMeeting = async (params={}) => {
    const {data} = await postMeeting(params);
    return data;
  };

  @action
  replaceMeeting = async (_id,params) => {
    const {data} = await putMeeting(_id,params);
    this.meeting = data;
  };

  @action
  updateMeeting = async (_id,params) => {
    const {data} = await patchMeeting(_id,params);
    this.meeting = data;
  };

}

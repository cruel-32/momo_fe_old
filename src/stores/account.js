import { observable, action } from 'mobx';
import {
  login,
  logout,
} from 'api/account';


export default class CategoryStore {
  @observable account = null;

  constructor(root) {
    this.root = root;
  }
  
  @action
  login = async (params={}) => {
    const result = await login(params);
    console.log('result : ', result);
    const {data} = result;
    this.account = data;
  };

  @action
  logout = async (params={}) => {
    const {data} = await logout(params);
    this.account = data;
  };

}

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
    const {data} = await login(params);
    this.account = data;
  };

  @action
  logout = async (params={}) => {
    // const {data} = await logout(params);
    // this.account = data;
    localStorage.removeItem('access_token');
    this.account = null;
  };

}

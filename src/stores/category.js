import { observable, action } from 'mobx';
import axios from './axios';

export default class CategoryStore {
  @observable categories = []; // ****  기본 값 1로 업데이트

  // **** 추가됨
  constructor(root) {
    this.root = root;
  }

  @action
  getCategories = async (_id='root') => {
    const {data} = await axios.get(`/api/category/${_id}`)
    this.categories = data;
  };
}

import { observable, action } from 'mobx';
import {login,} from 'api/account';
import Validator from 'validatorjs'
import {match,message} from 'lib/rules'

export default class CategoryStore {
  constructor(root) {
    this.root = root;
  }
  @observable account = null;
  @observable formValues =  {
    email: '',
    password: '',
    passwordConfirm: '',
  }
  @observable formErrors =  {
    email: '',
    password: '',
    passwordConfirm: '',
  }
  @observable meta = {
    isValid: true,
    error: null,
  }

  validation = {
    'email': ['required', `regex:${match.email}`],
    'password': ['required', `regex:${match.password}`],
    'passwordConfirm':  ['required', `same:password`],
  }

  messages = {
    "required" : message.required,
    "regex.email" : message.email,
    "regex.password" : message.password,
    "same.passwordConfirm" : message.passwordConfirm,
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

  @action
  onValueChange = (e) => {
    const {name, value} = e.target;
    this.formValues[name] = value;
    const validation = new Validator(
      this.formValues,
      this.validation,
      this.messages
    )
    this.meta.isValid = validation.passes();
    this.formErrors[name] = validation.errors.first(name)
  };

  @action
  onSubmitForm = (e) => {
    e.preventDefault();
    const validation = new Validator(
      this.formValues,
      this.validation,
      this.messages
    )
    console.log('onSubmitForm validation : ', validation);
    if(validation.passes()){
      console.log('login gogo');
    }
  };
}

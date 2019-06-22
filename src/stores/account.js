import { observable, action } from 'mobx';
import {login,} from 'api/account';
import Validator from 'validatorjs'
import {rules,message} from 'lib/rules'

export default class CategoryStore {
  constructor(root) {
    this.root = root;
  }
  @observable account = null;
  @observable formValues =  {
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  }
  @observable formErrors =  {
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  }
  @observable meta = {
    isValid: true,
    error: null,
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
  onValueChange = e => {
    const {name, value} = e.target;
    this.formValues[name] = value;
    const validation = new Validator(
      this.formValues,
      rules.accountRules,
      message,
    )
    this.meta.isValid = validation.passes();
    this.formErrors[name] = validation.errors.first(name)
  };

  @action
  loginSubmitForm = e => {
    e.preventDefault();
    const {email,password} = rules.accountRules;
    const validation = new Validator(
      {
        email: this.formValues.email,
        password: this.formValues.password,
      },
      {email,password},
      message,
    )
    console.log('onSubmitForm validation : ', validation);
    if(validation.passes()){
      console.log('login gogo');
    }
  };
  joinSubmitForm = e => {
    e.preventDefault();
    const {email,username,password,passwordConfirm} = rules.accountRules;
    const validation = new Validator(
      this.formValues,
      {email,username,password,passwordConfirm},
      message,
    )
    console.log('onSubmitForm validation : ', validation);
    if(validation.passes()){
      console.log('join gogo');
    }
  };
}

import { observable, action } from 'mobx';
import {login,} from 'api/account';
import Validator from 'validatorjs'
import {match,message} from 'lib/rules'

export default class CategoryStore {
  constructor(root) {
    this.root = root;
  }

  @observable account = null;
  @observable form =  {
    fields: {
      email: {
        value: '',
        error: null,
      },
      password: {
        value: '',
        error: null,
      },
      passwordConfirm: {
        value: '',
        error: null,
      },
    },
    meta: {
      isValid: true,
      error: null,
    }
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
    this.form.fields[name].value = value;
    let {email, password, passwordConfirm} = this.form.fields
    let validation = new Validator(
      {
        'email': email.value,
        'password': password.value,
        'passwordConfirm': passwordConfirm.value
      },
      {
        'email': ['required', `regex:${match.email}`],
        'password': ['required', `regex:${match.password}`],
        'passwordConfirm':  ['required', `same:password`],
      },
      {
        "required" : message.required,
        "regex.email" : message.email,
        "regex.password" : message.password,
        "same.passwordConfirm" : message.passwordConfirm,
      }
    )
    this.form.meta.isValid = validation.passes();
    this.form.fields[name].error = validation.errors.first(name)
  };

  @action
  onSubmitForm = (e) => {
    
  };

}

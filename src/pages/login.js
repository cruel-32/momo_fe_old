import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

@inject(stores => ({
    account: stores.account,
}))
@observer
class Login extends Component {
    constructor(props){
        super(props);
        console.log('this.props.account : ', this.props.account);

    }
    render() {
        const {form, onValueChange} = this.props.account;
        // console.log('form.meta.error : ', form.meta.error);

        return (
            <div>
                <form method="POST" onSubmit={form.onSubmit}>
                    <TextField
                        type="email"
                        name="email"
                        label="email"
                        required
                        value={form.fields.email.value}
                        onChange={onValueChange}
                        placeholder="email"
                    />
                    <div>email error : {form.fields.email.error}</div>
                    <TextField
                        type="password"
                        name="password"
                        label="password"
                        required
                        value={form.fields.password.value}
                        placeholder="password"
                        onChange={onValueChange}
                    />
                    <div>password error : {form.fields.password.error}</div>
                    <TextField
                        type="password"
                        name="passwordConfirm"
                        label="passwordConfirm"
                        required
                        value={form.fields.passwordConfirm.value}
                        placeholder="password confirm"
                        onChange={onValueChange}
                    />
                    <div>password confirm error : {form.fields.passwordConfirm.error}</div>

                    <Button type="submit" variant="outlined" color="primary">Login</Button>

                    <div>form.meta.error {form.meta.error && form.meta.error }</div>

                </form>
                <Button type="submit" variant="outlined" color="primary" onClick={this.logout}>logout</Button>
            </div>
        );
    }
}
export default Login;

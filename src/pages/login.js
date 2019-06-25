import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

@inject(stores => ({
    account: stores.account,
}))
@observer
class Login extends Component {
    render() {
        const {account,formValues,formErrors,onValueChange,meta,loginSubmitForm,logout} = this.props.account;
        return (
            <div>
                {!account ? 
                    <form method="POST" onSubmit={loginSubmitForm}>
                        <TextField
                            type="email"
                            name="email"
                            label="email"
                            required
                            value={formValues.email}
                            onChange={onValueChange}
                            placeholder="email"
                        />
                        <div>email error : {formErrors.email}</div>
                        <TextField
                            type="password"
                            name="password"
                            label="password"
                            required
                            value={formValues.password}
                            placeholder="password"
                            onChange={onValueChange}
                        />
                        <div>password error : {formErrors.password}</div>

                        <Button type="submit" variant="outlined" color="primary">Login</Button>

                        <div>meta.error {meta.error}</div>

                    </form>
                    :
                    <div>
                        {account.username}님 안녕하세요
                        <Button  type="submit" variant="outlined" color="primary" onClick={logout}>logout</Button>
                    </div>
                }
            </div>
        );
    }
}
export default Login;

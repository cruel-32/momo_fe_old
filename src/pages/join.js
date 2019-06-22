import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

@inject(stores => ({
    account: stores.account,
}))
@observer
class Join extends Component {
    render() {
        const {formValues,formErrors,onValueChange,meta,joinSubmitForm} = this.props.account;
        // console.log('form.meta.error : ', form.meta.error);
        // onSubmit={form.onSubmit}
        return (
            <div>
                <form method="POST" onSubmit={joinSubmitForm}>
                    <TextField
                        type="username"
                        name="username"
                        label="username"
                        required
                        value={formValues.username}
                        onChange={onValueChange}
                        placeholder="username"
                    />
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
                    
                    <TextField
                        type="password"
                        name="passwordConfirm"
                        label="passwordConfirm"
                        required
                        value={formValues.passwordConfirm}
                        placeholder="password confirm"
                        onChange={onValueChange}
                    />
                    <div>passwordConfirm error : {formErrors.passwordConfirm}</div>

                    <Button type="submit" variant="outlined" color="primary">Join</Button>
                    <div>meta.error {meta.error}</div>
                </form>
            </div>
        );
    }
}
export default Join;

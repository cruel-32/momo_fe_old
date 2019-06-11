import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    account: stores.account,
}))
@observer
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "cshee8508@gmail.com",
            password : ""
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    login = e =>{
        e.preventDefault();
        const { account } = this.props;
        account.login(this.state);
    }

    render() {
        const { email,password } = this.state;
        return (
            <div>
                <form method="POST" onSubmit={this.login}>
                    <input type="text" name="email" defaultValue={email} onChange={this.handleChange}/>
                    <input type="password" name="password" defaultValue={password} onChange={this.handleChange}/>
                    <button type="submit">login</button>
                </form>
            </div>
        );
    }
}

export default Login;

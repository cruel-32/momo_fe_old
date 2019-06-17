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
        this.state = {
            email : "cshee8508@gmail.com",
            password : "",
            switch:false,
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login = e =>{
        e.preventDefault();
        const { account } = this.props;
        account.login(this.state);
    }
    logout = e =>{
        e.preventDefault();
        const { account } = this.props;
        account.logout();
    }

    switch(){
        console.log('this.switch');
        this.setState({
            switch:!this.state.switch
        })
    }
    log(){
        console.log('this.state : ', this.state);
    }

    render() {
        const { email,password } = this.state;
        return (
            <div>
                <button onClick={()=>{this.switch()}}>switch</button>
                <button onClick={()=>{this.log()}}>log</button>
                <form method="POST" onSubmit={this.login}>
                    <TextField
                        type="email"
                        label="Name"
                        defaultValue={email}
                        onChange={this.handleChange}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        defaultValue={password}
                        onChange={this.handleChange}
                    />
                    <Button type="submit" variant="outlined" color="primary">Login</Button>
                </form>
                <Button type="submit" variant="outlined" color="primary" onClick={this.logout}>logout</Button>
            </div>
        );
    }
}

export default Login;

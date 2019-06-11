import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    meeting: stores.meeting,
    account: stores.account,
}))
@observer
class Meeting extends Component {
    constructor(props){
        super(props);
        console.log('this.state : ', this.state);

        this.state = {
            email : "cshee8508@gmail.com",
            password : "854120202qq!"
        }

    }

    login = (e) =>{
        e.preventDefault();
        const { account } = this.props;
        account.login(this.state);
    }

    render() {
        const { meeting } = this.props;
        const { email,password } = this.state;
        
        return (
            <div>
                <h1>meeting</h1>
                <button onClick={()=>{meeting.getMeetings()}}>getMeetings</button>
                <form method="POST" onSubmit={this.login}>
                    <input type="text" name="email" defaultValue={email}/>
                    <input type="text" name="password" defaultValue={password}/>
                    <button type="submit">login</button>
                </form>
            </div>
        );
    }
}

export default Meeting;

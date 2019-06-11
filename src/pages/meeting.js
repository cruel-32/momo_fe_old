import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    meeting: stores.meeting,
}))
@observer
class Meeting extends Component {
    render() {
        const { meeting } = this.props;
        
        return (
            <div>
                <h1>meeting</h1>
                <button onClick={()=>{meeting.getMeetings()}}>getMeetings (개발자도구 확인)</button>
            </div>
        );
    }
}

export default Meeting;

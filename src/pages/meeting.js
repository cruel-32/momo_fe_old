import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    meeting: stores.meeting
}))
@observer
class Meeting extends Component {
    render() {
        const { meeting } = this.props;
        console.log('meeting : ', meeting);
        return (
            <div>
                <h1>meeting</h1>
                <button onClick={()=>{meeting.getMeetings()}}>getMeetings</button>
            </div>
        );
    }
}

export default Meeting;

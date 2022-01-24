import React from 'react';
import {Button, Input} from 'antd';

class SharedComp extends React.Component {
    render () {
        return (
            <div style={{padding: 30, backgroundColor: "red"}}>
                <h1>My shared component!!</h1>
                <Button>Button From Shared</Button>     
                {/* comment above Button tag  */}
            </div>
        )
    }
}

export default SharedComp;
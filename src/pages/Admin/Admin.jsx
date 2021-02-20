import React, { Component } from 'react';
import {message,Button} from 'antd';
/**
 * 管理员组件
 */
export default class Admin extends Component {
    hanldleClick=()=>{
        message.success('管理员');
    
    }
    render() {
        return (
            <div>
                 <Button type="primary" onClick={this.hanldleClick}>管理员</Button>
            </div>
        )
    }
}

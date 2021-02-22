import React, { Component } from 'react';
import {message,Button} from 'antd';
import memoryUtils from '../../utils/memoryUtils'
import { Redirect } from 'react-router';
import { Layout } from 'antd';
import Header from '../../components/header/index';
import LeteNav from '../../components/left-nav';

const {  Footer, Sider, Content } = Layout;
/**
 * 管理员组件
 */
export default class Admin extends Component {
    hanldleClick=()=>{
        message.success('管理员');
    
    }
    render() {
        const user=memoryUtils.user;
        if (!user||!user.id) {
            //没有user自动跳转到登录（在render（）中）
            <Redirect to='/login'/>
        }
        return (
            <Layout style={{height:'100%'}}>
            <Sider>
                <LeteNav/>
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content style={{background:'#fff'}}>Content</Content>
              <Footer style={{textAlign:'center',color:'#cccccc'}}>金融融融融果果学习编写</Footer>
            </Layout>
          </Layout>
        )
    }
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from  './App';
import storageUtils from './utils/storageUtils';
import memoryUtils from './utils/memoryUtils';
/**
 * 入口文件
 */
//读取本地的文件到内存中（防止已经登录的user信息一刷新又跳转到登录页面重新登陆）
const user= storageUtils.getUser()
memoryUtils.user=user

//将App组件标签渲染到index页面的div上
 ReactDOM.render(<App/>,document.getElementById("root"));


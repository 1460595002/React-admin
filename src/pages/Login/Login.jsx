import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import { Form, Input, Button, Checkbox,Icon } from 'antd';
import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import {reqLogin} from "../../api"
const Item = Form.Item
/**
 * 登录组件
 *   校验：
 *        用户名/密码的的合法性要求 
 *        1). 必须输入  
 *        2). 必须大于等于 4 位  
 *        3). 必须小于等于 12 位 
 *        4). 必须是英文、数字或下划线组成
 */
class Login extends Component {

  /*登陆*/
  login = (e) => {
    // 阻止事件默认行为(不提交表单) 
    e.preventDefault()
    // 进行表单所有控件的校验 
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // 校验成功
        const { username, password } = values
        console.log('提交登陆请求', username, password)
      } else {
        // 校验失败 
        console.log(err)
      }
    })
  }

  /*** 自定义表单的校验规则 */
  validator = (rule, value, callback) => {

    // console.log(rule, value)
    const length = value && value.length
    const pwdReg = /^[a-zA-Z0-9_]+$/
    if (!value) {
      // callback 如果不传参代表校验成功，如果传参代表校验失败，并且会提示错误

      callback('必须输入密码')
    } else if (length < 4) {
      callback('密码必须大于 4 位')
    } else if (length > 12) {
      callback('密码必须小于 12 位')
    } else if (!pwdReg.test(value)) {
      callback('密码必须是英文、数组或下划线组成')
    } else {
      callback() // 必须调用 callback

    }
  }


  /**
   * 
   * @param {}} values 
   */

  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  render() {
  // 得到具有强大功能的form对象
  const form = this.props.form;
  const {getFieldDecorator} = form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="log" />
          <h1>React后台管理项目</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onSubmit={this.login}
          >
            <Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              {
                getFieldDecorator('username', {
                  // 根据内置验证规则进行声明式验证
                  rules: [
                    {required: true, whitespace: true, message: '必须输入用户名'},

                    {min: 4, message: '用户名必须大于 4 位'},
                     {max: 12, message: '用户名必须小于 12 位'},
                     {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数组或下划线 组成'}
                  ]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名称" style={{ color: 'rgba(0,0,0,.25)' }} />
                  )
              }
            </Item>
            <Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              {
getFieldDecorator('password', {
  rules: [
// 自定义表单校验规则
{validator: this.validator}

  ]
})(
  <Input
      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
      type="password"
      placeholder="Password"
  />,
)}
             
            </Item>
            <Item>
              <Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码：</Checkbox>    <a className="login-form-forgot" href="">
                忘记密码？
        </a>
              </Item>
              <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
        </Button>
              <a href=""> 注册</a>
            </Item>
            </Item>
         
          </Form>
        </section>
      </div>
    )
  }
}
export default Form.create()(Login)
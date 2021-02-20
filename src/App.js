import React, { Component } from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'

/** 
 * 根组件
 */
export default class App extends Component {
 

    render() {
        return (
                <BrowserRouter>
                <Switch>{/**只匹配其中一个 */}
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Admin}></Route>
                </Switch>
                </BrowserRouter>
        )
    }
}

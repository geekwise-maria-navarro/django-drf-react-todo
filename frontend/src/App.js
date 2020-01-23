// frontend/src/App.js

import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header";
import Login from "./components/account/login";
import Register from "./components/account/register";
import Customer from "./components/customer";
import Account from "./components/account";
import Branch from "./components/branch";
import Home from "./components/home";
import Reset from "./components/account/reset";
import PrivateRoute from "./components/common/PrivateRouter";
import { Provider } from 'react-redux';
import store from "./store";
import { loadUser } from './actions/auth';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    };

    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/reset" component={Reset}/>
                    <PrivateRoute exact path="/branch" component={Branch}/>
                    <PrivateRoute exact path="/customer" component={Customer}/>
                    <PrivateRoute exact path="/account" component={Account}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
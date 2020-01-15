// frontend/src/App.js

import React, { Component } from "react";
import branch from "./components/branch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/layout/header";
import Login from "./components/account/login";
import Register from "./components/account/register";
import Customer from "./components/customer";
import Account from "./components/account";
import Branch from "./components/branch";
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
                    <PrivateRoute exact path="/" component={Branch}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/branch" component={Branch}/>
                    <Route exact path="/customer" component={Customer}/>
                    <Route exact path="/account" component={Account}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;

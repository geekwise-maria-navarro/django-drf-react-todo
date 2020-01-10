// frontend/src/App.js

import React, { Component } from "react";
import branch from "./components/branch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/layout/header";
import Login from "./components/account/login";
import Register from "./components/account/register";

class App extends Component {
    componentDidMount() {

    };

    render(){
        return(
            <Router>
                <Header/>
                <Route exact path="/" component={branch}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Router>
        );
    }
}

export default App;
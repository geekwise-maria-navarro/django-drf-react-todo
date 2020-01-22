import React, { Component } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class Home extends Component {

    divStyle={
        // background: 'white',
        padding: '30px',
        color: 'white'
    }
    
    render() {
    return (
        <div className="row-container narrow" style={this.divStyle}>
        <div className="row center-align-columns">
        <div className="column-container column-7 retain-width-on-mobile">
        <div className="column accent-purple">
        <div className="dark-background">
            <h1 className="headline-1">TBD</h1>
            <h2>Still waiting...</h2>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
        
    };
}
export default Home;
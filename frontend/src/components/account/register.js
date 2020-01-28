import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import axios from "axios";


export class Register extends Component {
    state = {
        username: "", 
        email: "",
        password: "",
        justRegister: false,
        justRegisterUser: false,
        groups: [1],
        groupList: [],
        groupName: ""
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };
    
    componentDidMount() {
        this.setState({justRegister: false});
        this.setState({justRegister: false});
        this.getGroupList();
    };

    getGroupList() {
      axios
        .get('http://127.0.0.1:8000/api/group/')
        .then( res => {
          if(this.props.auth.user != null){
            this.setState({ groupName: this.props.auth.user.groups[0].name });
          }
          this.setState({ groupList: res.data });
          console.log(this.state.groupList);
        })
        .catch(err => console.log(err));
    };

  renderGroupOptions() {
    // if(!this.props.isAuthenticated || this.state.groupName === "bank.admin") {
    //   return this.state.groupList.slice(0, 5).map(group => (
    //     <option key={group.id} value={group.id}>{group.name}</option>
    //   ));
    // }
    // else if(this.state.groupName === "member") {
    //   return this.state.groupList.slice(0, 5).map(group => (
    //     <option key={group.id} value={group.id}>{group.name}</option>
    //   ));
    // }
    // else if(this.state.groupName === "branch.admin") {
    //   return this.state.groupList.slice(0, 5).map(group => (
    //     <option key={group.id} value={group.id}>{group.name}</option>
    //   ));
    // }
    // else if(this.state.groupName === "branch.staff") {
    //   return this.state.groupList.slice(0, 5).map(group => (
    //     <option key={group.id} value={group.id}>{group.name}</option>
    //   ));
    // }
    // else {
    //   return this.state.groupList.map(group => (
    //     <option key={group.id} value={group.id}>{group.name}</option>
    //   ));
    // }
    return this.state.groupList.map(group => (
          <option key={group.id} value={group.id}>{group.name}</option>
        ));
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ groups: [value]});
  };
    

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, groups } = this.state;
        const newUser = {
            username,
            password,
            email,
            groups
        };
        this.props.register(newUser);
        this.setState({justRegister: true});
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to="/"/>;
        }
        if(this.state.justRegister) {
            return <Redirect to="/login"/>;
        }
        
        const { username, email, password } = this.state;
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="col-md-6 m-auto">
              <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.onChange}
                      value={username}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.onChange}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onChange}
                      value={password}
                    />
                  </div>
                  <div className="form-group">
                    <label><strong>Group</strong></label>
                    <select
                      className="form-control"
                      name="groups"
                      onChange={this.handleChange}>
                        {this.renderGroupOptions()}
                    </select> 
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </form>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
});
export default connect(mapStateToProps, { register })(Register);
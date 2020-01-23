// frontend/src/App.js

import React, { Component } from "react";
import CustomModal from "./ModalAccount";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Account extends Component {
    constructor(props) {
    super(props);
    this.state = {
        viewCompleted: true,
        activeItem: {
        account_options: "",
        account_owner: ""
        },
        accountList: []
    };
    }
    componentDidMount() {
    this.refreshList();
    }
    refreshList = () => {
    axios
        .get("https://maria-demo-backend.herokuapp.com/api/account/")
        .then(res => this.setState({ accountList: res.data }))
        .catch(err => console.log(err));
    };
  
    renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.accountList;
    return newItems.map(item => (
        <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
        >
        <span
            className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todoac" : ""
            }`}
            title={item.account_options}
        >
        {item.account_owner} | {item.account_options}
        </span>
        <span>
            <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
            >
            {" "}
            Edit{" "}
            </button>
            <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
            >
            Delete{" "}
            </button>
        </span>
        </li>
    ));
    };
    toggle = () => {
    this.setState({ modal: !this.state.modal });
    };
    handleSubmit = item => {
    this.toggle();
    if (item.id) {
        axios
        .put(`https://maria-demo-backend.herokuapp.com/api/account/${item.id}/`, item)
        .then(res => this.refreshList());
        return;
    }
    axios
        .post("https://maria-demo-backend.herokuapp.com/api/account/", item)
        .then(res => this.refreshList());
    };
    handleDelete = item => {
    axios
        .delete(`https://maria-demo-backend.herokuapp.com/api/account/${item.id}`)
        .then(res => this.refreshList());
    };
    createItem = () => {
    const item = { account_options: "", account_owner: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    render() {
    return (
        <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Account Information</h1>
        <div className="row ">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
                <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                    Account Info
                </button>
                </div>
                <ul className="list-group list-group-flush">
                {this.renderItems()}
                </ul>
            </div>
            </div>
        </div>
        {this.state.modal ? (
            <CustomModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
            />
        ) : null}
        </main>
    );
    }
}
export default Account;
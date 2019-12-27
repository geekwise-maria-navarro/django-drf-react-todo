// frontend/src/App.js

import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        viewCompleted: true,
        activeItem: {
        branch: "",
        customer: "",
        product_options: ""
        },
        todoList: []
    };
    }
    componentDidMount() {
        console.log("testing ssh key")
    this.refreshList();
    }
    refreshList = () => {
    axios
        // .get("https://django-drf-react-todo-2.herokuapp.com/admin/todo/todo/")
        .get("http://127.0.0.1:8000/api/todos/")
        .then(res => this.setState({ todoList: res.data }))
        .catch(err => console.log(err));
    };
    displayCustomer = status => {
    if (status) {
        return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
    };
    renderTabList = () => {
    return (
        <div className="my-5 tab-list">
        <span
            onClick={() => this.displayCustomer(true)}
            className={this.state.viewCompleted ? "active" : ""}
        >
            Branch
        </span>
        <span
            onClick={() => this.displayCustomer(false)}
            className={this.state.viewCompleted ? "" : "active" }
        >
            Customer
        </span>
        <span
            onClick={() => this.displayCustomer(false)}
            className={this.state.viewCompleted ? "" : "active"}
        >
            Products
        </span>
        <span
            onClick={() => this.displayCustomer(false)}
            className={this.state.viewCompleted ? "" : "active"} 
        >
            Account
        </span>
        </div>
    );
    };
    renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList;
    // const newItems = this.state.todoList.filter(
    //     item => item.completed === viewCompleted
    // );
    return newItems.map(item => (
        <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
        >
        <span
            className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todoac" : ""
            }`}
            title={item.branch}
        >
            {item.branch}
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
        .put(`http://127.0.0.1:8000/api/todos/${item.id}/`, item)
        // .put(`https://django-drf-react-vscode.herokuapp.com/admin/bank/${item.id}/`, item)
        .then(res => this.refreshList());
        return;
    }
    axios
        .post("http://127.0.0.1:8000/api/todos/", item)
        // .post("https://django-drf-react-vscode.herokuapp.com/admin/bank/", item)
        .then(res => this.refreshList());
    };
    handleDelete = item => {
    axios
        .delete(`http://127.0.0.1:8000/api/todos/${item.id}`)
        // .delete(`https://https://django-drf-react-vscode.herokuapp.com/admin/bank/${item.id}`)
        .then(res => this.refreshList());
    };
    createItem = () => {
    const item = { branch: "", customer: "", product_options: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    render() {
    return (
        <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Bank App</h1>
        <div className="row ">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
                <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                    Enter Info
                </button>
                </div>
                {this.renderTabList()}
                <ul className="list-group list-group-flush">
                {this.renderItems()}
                </ul>
            </div>
            </div>
        </div>
        {this.state.modal ? (
            <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
            />
        ) : null}
        </main>
    );
    }
}
export default App;
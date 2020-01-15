import React, { Component } from "react";
import Modal from "./ModalCustomer";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Customer extends Component {
    constructor(props) {
    super(props);
    this.state = {
        viewCompleted: true,
        activeItem: {
        customer_name: "",
        customer_email: ""
        },
        customerList: []
    };
    }
    componentDidMount() {
    this.refreshList();
    }
    refreshList = () => {
    axios
        .get("https://maria-staging-backend.herokuapp.com/api/customer/")
        .then(res => this.setState({ customerList: res.data }))
        .catch(err => console.log(err));
    };
    renderItems = () => {
    const newItems = this.state.customerList;
    console.log(newItems);
    return newItems.map(item => (
        <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
        >
        <span
            className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todoac" : ""
            }`}
            title={item.customer_name}
        >
            {item.customer_name}
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
        .put(`https://maria-staging-backend.herokuapp.com/api/customer/${item.id}/`, item)
        .then(res => this.refreshList());
        return;
    }
    axios
        .post("https://maria-staging-backend.herokuapp.com/api/customer/", item)
        .then(res => this.refreshList());
    };
    handleDelete = item => {
    axios
        .delete(`https://maria-staging-backend.herokuapp.com/api/customer/${item.id}`)
        .then(res => this.refreshList());
    };
    createItem = () => {
    const item = { customer_name: "", customer_email: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
    };
    render() {
    return (
        <main className="content">
        <h1 className="text-white text-uppercase text-center my-4"> Customer Information </h1>
        <div className="row ">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
                <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                    Enter
                </button>
                </div>
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
export default Customer;
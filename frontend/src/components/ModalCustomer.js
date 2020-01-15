// frontend/src/components/Modal.js

import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
    super(props);
    this.state = {
        activeItem: this.props.activeItem
    };
    }
    handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
    };
    render() {
    const { toggle, onSave } = this.props;
    return (
        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Customer Information </ModalHeader>
        <ModalBody>
            <Form>
            <FormGroup>
                <Label for="customer_name">Customer Name</Label>
                <Input
                type="text"
                name="customer_name"
                value={this.state.activeItem.customer_name}
                onChange={this.handleChange}
                placeholder="Full Name"
                />
            </FormGroup>
            <FormGroup>
                <Label for="customer_email"> Customer Email </Label>
                <Input
                type="text"
                name="customer_email"
                value={this.state.activeItem.customer_email}
                onChange={this.handleChange}
                placeholder="customer_email"
                />
            </FormGroup>
            {/* <FormGroup>
                <Label for="product_options"> Product </Label>
                <Input
                type="text"
                name="product_options"
                value={this.state.activeItem.product_options}
                onChange={this.handleChange}
                placeholder="Product Options"
                />
            </FormGroup> */}
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
            </Button>
        </ModalFooter>
        </Modal>
    );
    }
}
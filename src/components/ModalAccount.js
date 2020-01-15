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
        <ModalHeader toggle={toggle}> Account </ModalHeader>
        <ModalBody>
            <Form>
            <FormGroup>
                <Label for="account_options">Account Info</Label>
                <Input
                type="text"
                name="account_options"
                value={this.state.activeItem.account_options}
                onChange={this.handleChange}
                placeholder="Account Options"
                />
            </FormGroup>
            <FormGroup>
                <Label for="account_owner"> Account Owner </Label>
                <Input
                type="text"
                name="account_owner"
                value={this.state.activeItem.account_owner}
                onChange={this.handleChange}
                placeholder="Account Owner"
                />
            </FormGroup>
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
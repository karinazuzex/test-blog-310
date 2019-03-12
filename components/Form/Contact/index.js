import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import { validators, helpers } from "utils";
import { consts } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import Button from "components/ui/Button";
import Checkbox from "components/ui/Checkbox";
import Container from "../../grid/Container";
import {exceptions} from "../../../config";
import {error} from "react-notification-system-redux";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            nameError: null,
            emailError: null,
            subjectError: null,
            messageError: null,
            status: null,
        });

        this.state = this.getInitialState();
    }

    reset = () => {
        this.setState(this.getInitialState());
        this.name.value = null;
        this.email.value = null;
        this.subject.value = null;
        this.message.value = null;
    };

    handleNameChange = () => {
        this.setState({ nameError: null });
    };

    handleEmailChange = () => {
        this.setState({ emailError: null });
    };

    handleSubjectChange = () => {
        this.setState({ subjectError: null });
    };

    handleMessageChange = () => {
        this.setState({ messageError: null });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const subject = this.subject.value.trim();
        const message = this.message.value.trim();
        const nameError = validators.validateName(name);
        const emailError = validators.validateEmail(email);
        const subjectError = validators.validateSubject(subject);
        const messageError = validators.validateMessage(message);
        this.setState({
            nameError,
            emailError,
            subjectError,
            messageError,
        });
        const formError = validators.formatFormError([nameError, emailError, subjectError, messageError]);
        if (formError) {
            dispatch(error({
                position: "bc",
                autoDismiss: 0,
                message: formError,
            }));
            return;
        }
        if (this.subscribe.getValue()) {
            dispatch(mailerOperations.mailchimpSubscribe(name, email));
        }
        const response = await axios.post("/api/contact", {
            name, email, subject, message,
        });
    };

    render() {
        const disabled = this.state.status === "pending" || this.state.status === "success";
        return (
            <form className="form form--contact" onSubmit={this.handleSubmit}>
                <Row className="form__row">
                    <div className="form__group">
                        <label className="form__group-label" htmlFor="name-contact">Full name</label>
                        <input
                            type="text"
                            className={`input ${this.state.nameError ? "input--error" : ""}`}
                            id="name-contact"
                            disabled={disabled}
                            onChange={this.handleNameChange}
                            ref={(ref) => { this.name = ref }}
                        />
                    </div>
                    <div className="form__group">
                        <label className="form__group-label" htmlFor="email-contact">Email address</label>
                        <input
                            type="text"
                            className={`input ${this.state.emailError ? "input--error" : ""}`}
                            id="email-contact"
                            disabled={disabled}
                            onChange={this.handleEmailChange}
                            ref={(ref) => { this.email = ref }}
                        />
                    </div>
                </Row>
                <Row className="form__row">
                    <div className="form__group">
                        <label className="form__group-label" htmlFor="subject-contact">Subject</label>
                        <input
                            type="text"
                            className={`input ${this.state.subjectError ? "input--error" : ""}`}
                            id="subject-contact"
                            disabled={disabled}
                            onChange={this.handleSubjectChange}
                            ref={(ref) => { this.subject = ref }}
                        />
                    </div>
                </Row>
                <Row className="form__row align-end-xs">
                    <div className="form__group">
                        <label className="form__group-label" htmlFor="message-contact">Message</label>
                        <textarea
                            className={`textarea ${this.state.subjectError ? "textarea--error" : ""}`}
                            id="message-contact"
                            disabled={disabled}
                            onChange={this.handleMessageChange}
                            ref={(ref) => { this.message = ref }}
                        />
                    </div>
                </Row>
                <Row className="form__row align-center-xs justify-between-xs">
                    <div className="form__group">
                        <Checkbox
                            ref={(ref => {this.subscribe = ref})}
                        >
                            Subscribe to our weekly newsletter
                        </Checkbox>
                    </div>
                    <div className="form__group form__group--fixed">
                        <Button
                            disabled={disabled}
                            role="submit"
                            type="solid"
                            theme="red-white">
                            Submit
                        </Button>
                    </div>
                </Row>
            </form>
        );
    }
}

ContactForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(ContactForm);

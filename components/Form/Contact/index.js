import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextLink from "next/link";
import axios from "axios";
import { error, info, removeAll } from "react-notification-system-redux";

import { validators, helpers } from "utils";
import { consts, messages, routes } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import { Button, Link, Checkbox } from "components/ui";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            nameError: null,
            emailError: null,
            subjectError: null,
            messageError: null,
            processing: false,
        });

        this.state = this.getInitialState();
    }

    reset = () => {
        this.setState(this.getInitialState());
        this.name.value = null;
        this.email.value = null;
        this.subject.value = null;
        this.message.value = null;
        this.agreement.reset();
        this.subscribe.reset();
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
        this.setState({
            processing: true,
        });
        dispatch(removeAll());
        const agreement = this.agreement.getValue();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const subject = this.subject.value.trim();
        const message = this.message.value.trim();
        const agreementError = validators.validateAgreement(agreement);
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
        const formError = validators.formatFormError([
            nameError, emailError, subjectError, messageError, agreementError,
        ]);
        if (formError) {
            dispatch(error({
                position: "bc",
                autoDismiss: 0,
                message: formError,
            }));
            this.setState({
                processing: false,
            });
            return;
        }
        if (this.subscribe.getValue()) {
            dispatch(mailerOperations.mailchimpSubscribe(email));
        }
        const response = await axios.post("/api/contact", {
            name, email, subject, message,
        });
        if (
            response.status === mailerTypes.MAILER_SUCCESS_STATUS
            && response.data === mailerTypes.MAILER_SUCCESS_DATA) {
            this.reset();
            dispatch(info({
                position: "bc",
                autoDismiss: 3,
                message: messages.REQUEST_SUCCESSFULLY_SENT,
            }));
        }
        this.setState({
            processing: false,
        });
    };

    render() {
        const disabled = this.state.processing;
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
                <Row className="form__row">
                    <div className="form__group">
                        <Checkbox
                            ref={(ref) => {this.agreement = ref}}
                        >
                            I agree to the&nbsp;
                            <NextLink href={routes.TERMS_PAGE.path}>
                                <Link theme="red">
                                    {routes.TERMS_PAGE.nameLong}
                                </Link>
                            </NextLink> and&nbsp;
                            <NextLink href={routes.PRIVACY_PAGE.path}>
                                <Link theme="red">
                                    {routes.PRIVACY_PAGE.nameLong}
                                </Link>
                            </NextLink>
                        </Checkbox>
                    </div>
                </Row>
                <Row className="form__row">
                    <div className="form__group">
                        <Checkbox
                            ref={(ref) => {this.subscribe = ref}}
                        >
                            Subscribe to our weekly newsletter
                        </Checkbox>
                    </div>
                </Row>
                <Row className="form__row justify-center-xs">
                    <div className="form__group form__group--fixed">
                        <Button
                            disabled={disabled}
                            role="submit"
                            type="solid"
                            theme="red-white"
                        >
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

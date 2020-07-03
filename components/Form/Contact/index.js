import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextLink from "next/link";
import axios from "axios";
import { error, info, removeAll } from "react-notification-system-redux";
import ReCaptcha from "components/ReCaptcha";

import { validators, helpers } from "utils";
import { consts, messages, routes, analytics, exceptions } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import { Button, Link, Checkbox } from "components/ui";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            agreementError: null,
            nameError: null,
            emailError: null,
            subjectError: null,
            messageError: null,
            processing: false,
            recaptchaValue: null,
            recaptchaLoaded: false,
        });

        this.state = this.getInitialState();
    }
    componentDidMount(){
        if(document.location.search === "?support"){
            this.subject.value = "Requesting more info on Memurai Consulting Services";
            this.message.value = "I would like to learn more about Memurai Consulting Services. Let me know when is a good time to talk. Thank you!";
        }
    }
    componentWillUnmount() {
        this.recaptcha.reset();
    }

    reset = () => {
        this.setState(this.getInitialState());
        this.name.value = '';
        this.email.value = '';
        this.subject.value = '';
        this.message.value = '';
        this.agreement.reset();
        this.subscribe.reset();
    };

    handleNameChange = async () => {
        if (this.state.nameError) {
            await this.setState({ nameError: null });
            this.checkIsErrorLeft();
        }
    };

    handleEmailChange = async () => {
        if (this.state.emailError) {
            await this.setState({ emailError: null });
            this.checkIsErrorLeft();
        }
    };

    handleSubjectChange = async () => {
        if (this.state.subjectError) {
            await this.setState({ subjectError: null });
            this.checkIsErrorLeft();
        }
    };

    handleMessageChange = async () => {
        if (this.state.messageError) {
            await this.setState({ messageError: null });
            this.checkIsErrorLeft();
        }
    };

    handleAgreementChange = async () => {
        if (this.state.agreementError) {
            await this.setState({ agreementError: null });
            this.checkIsErrorLeft();
        }
    };

    checkIsErrorLeft = () => {
        const { dispatch } = this.props;
        if (!(
            this.state.nameError
            || this.state.emailError
            || this.state.subjectError
            || this.state.messageError
            || this.state.agreementError
        )) {
            dispatch(removeAll());
        }
    };

    onRecaptchaLoad = () => {
        this.setState({
            recaptchaLoaded: true,
        });
    };

    onRecaptchaChange = (value) => {
        this.setState({
            recaptchaValue: value,
        });
        if (this.state.processing) {
            this.submit(value);
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        analytics.event({
            category: "Contact form",
            action: "Submit",
            label: "Start",
        });
        const { dispatch } = this.props;
        this.setState({
            processing: true,
        });
        dispatch(removeAll());
        if (!this.state.recaptchaValue) {
            this.recaptcha.execute();
        } else {
            this.submit(this.state.recaptchaValue);
        }

    };

    submit = async (token) => {
        const { dispatch } = this.props;
        if (!token) {
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: exceptions.RECAPTCHA_VALIDATION_FAILED,
            });
            dispatch(error({
                position: "bc",
                autoDismiss: 0,
                message: exceptions.RECAPTCHA_VALIDATION_FAILED,
            }));
            this.setState({
                processing: false,
            });
            return;
        }
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
        const formError = validators.formatFormError([
            nameError, emailError, subjectError, messageError, agreementError,
        ]);
        this.setState({
            nameError,
            emailError,
            subjectError,
            messageError,
            agreementError: agreementError === formError ? agreementError : null,
        });
        if (formError) {
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: "Error shown, terminate",
            });
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
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: "Subscribe choosen, attempting",
            });
            dispatch(mailerOperations.mailchimpSubscribe(email));
        }

        // Get user geolocation - replace with Memurai key after registering on https://app.ipgeolocation.io/
        const ipgeolocation_key = 'e8237f0c4299474bbf794810afe749a2';
        const userLocation = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${ipgeolocation_key}`);

        // Send user message to Memurai team
        const response = await axios.post("/api/contact", {
            name, email, subject, message, userLocation
        });
        if (
            response.status === mailerTypes.MAILER_SUCCESS_STATUS
            && response.data === mailerTypes.MAILER_SUCCESS_DATA) {
            this.reset();
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: "Success",
            });
            dispatch(info({
                position: "bc",
                autoDismiss: 3,
                message: messages.REQUEST_SUCCESSFULLY_SENT,
            }));
        } else {
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: "Error on submit from backend",
            });
        }
        this.setState({
            processing: false,
        });
    };

    render() {
        const disabled = this.state.processing || !this.state.recaptchaLoaded;
        return (
            <Fragment>
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
                                className={`textarea ${this.state.messageError ? "textarea--error" : ""}`}
                                id="message-contact"
                                disabled={disabled}
                                onChange={this.handleMessageChange}
                                ref={(ref) => { this.message = ref }}
                            />
                        </div>
                    </Row>
                    <Row className="form__row align-center-xs justify-center-xs">
                        <div className="form__group form__group--checkbox">
                            <Checkbox
                                ref={(ref) => {this.agreement = ref}}
                                onChange={this.handleAgreementChange}
                            >
                                I agree to the&nbsp;
                                <NextLink href={routes.TERMS_PAGE.path} passHref prefetch>
                                    <Link theme="red">
                                        {routes.TERMS_PAGE.nameLong}
                                    </Link>
                                </NextLink> and&nbsp;
                                <NextLink href={routes.PRIVACY_PAGE.path} passHref prefetch>
                                    <Link theme="red">
                                        {routes.PRIVACY_PAGE.nameLong}
                                    </Link>
                                </NextLink>
                            </Checkbox>
                            <Checkbox
                                ref={(ref) => {this.subscribe = ref}}
                            >
                                Subscribe to our newsletter
                            </Checkbox>
                        </div>
                        <div className="form__group form__group--fixed form__group--lg">
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
                <ReCaptcha
                    onLoad={this.onRecaptchaLoad}
                    onChange={this.onRecaptchaChange}
                    ref={(ref) => { this.recaptcha = ref }}
                />
            </Fragment>
        );
    }
}

ContactForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(ContactForm);

import React, { Component, Fragment } from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { error, info, removeAll } from "react-notification-system-redux";

import { validators, helpers } from "utils";
import { consts, routes, messages } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import { Button, Link, Checkbox } from "components/ui";

class DownloadForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            done: false,
            nameError: null,
            email: null,
            emailError: null,
            processing: false,
        });

        this.state = this.getInitialState();
    }

    reset = () => {
        this.setState(this.getInitialState());
        this.name.value = null;
        this.email.value = null;
        this.agreement.reset();
        this.subscribe.reset();
    };

    clearResult = () => {
        this.setState({
            done: false,
            email: null,
        });
    };

    handleNameChange = () => {
        this.setState({ nameError: null });
    };

    handleEmailChange = () => {
        this.setState({ emailError: null });
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
        const agreementError = validators.validateAgreement(agreement);
        const nameError = validators.validateName(name);
        const emailError = validators.validateEmail(email);
        this.setState({
            nameError,
            emailError,
        });
        const formError = validators.formatFormError([nameError, emailError, agreementError]);
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
            dispatch(mailerOperations.mailchimpSubscribe(name, email));
        }
        const response = await axios.post("/api/request-download", {
            name, email,
        });
        if (
            response.status === mailerTypes.MAILER_SUCCESS_STATUS
            && response.data === mailerTypes.MAILER_SUCCESS_DATA) {
            this.setState({
                done: true,
                email,
            });
            dispatch(mailerOperations.mailchimpDownload(name, email));
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

    renderForm = () => {
        const disabled = this.state.processing;
        return (
            <form className="form form--download" onSubmit={this.handleSubmit}>
                <Row className="form__row align-end-xs">
                    <div className="form__group">
                        <label className="form__group-label" htmlFor="name-download">Full name</label>
                        <input
                            type="text"
                            className={`input ${this.state.nameError ? "input--error" : ""}`}
                            id="name-download"
                            disabled={disabled}
                            onChange={this.handleNameChange}
                            ref={(ref) => { this.name = ref }}
                        />
                    </div>
                    <div className="form__group">
                        <label className="form__group-label" htmlFor="email-download">Email address</label>
                        <input
                            type="text"
                            className={`input ${this.state.emailError ? "input--error" : ""}`}
                            id="email-download"
                            disabled={disabled}
                            onChange={this.handleEmailChange}
                            ref={(ref) => { this.email = ref }}
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
    };

    renderDoneContent = () => (
        <div className="block text-center">
            <p className="block__description block__description--fixed block__elem">
                Thank you for your interest in Memurai. We have sent an email to&nbsp;
                <span className="text-bold">
                    {this.state.email}
                </span> containing a link to download the software.
            </p>
            <p className="block__description">
                If you don&apos;t receive the email, please check your spam folder, or&nbsp;
                <Link
                    theme="red"
                    onClick={this.clearResult}
                >
                    try again
                </Link>.
            </p>
        </div>
    );

    render() {
        return (
            <Fragment>
                {this.state.done
                    ? this.renderDoneContent()
                    : this.renderForm()
                }
            </Fragment>
        );
    }
}

DownloadForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(DownloadForm);

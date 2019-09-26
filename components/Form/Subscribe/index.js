import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextLink from "next/link";
import { info, error, removeAll } from "react-notification-system-redux";
import ReCaptcha from "components/ReCaptcha";

import { validators, helpers } from "utils";
import { consts, exceptions, types, routes, analytics } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import { Button, Checkbox, Link } from "components/ui";

class SubscribeForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            agreementError: null,
            emailError: null,
            processing: false,
            recaptchaValue: null,
            recaptchaLoaded: false,
        });

        this.state = this.getInitialState();
    }

    componentWillUnmount() {
        this.recaptcha.reset();
    }

    reset = () => {
        this.setState(this.getInitialState());
        this.email.value = null;
        this.agreement.reset();
    };

    handleEmailChange = async () => {
        if (this.state.emailError) {
            await this.setState({ emailError: null });
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
            this.state.emailError
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
            category: "Subscribe form",
            action: "Submit",
            label: "Start",
        });
        const { dispatch } = this.props;
        dispatch(removeAll());
        this.setState({
            processing: true,
        });
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
                category: "Subscribe form",
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
        const email = this.email.value.trim();
        const agreementError = validators.validateAgreement(agreement);
        const emailError = validators.validateEmail(email);
        const formError = validators.formatFormError([emailError, agreementError]);
        this.setState({
            emailError,
            agreementError: agreementError === formError ? agreementError : null,
        });
        if (formError) {
            analytics.event({
                category: "Subscribe form",
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
        const response = await dispatch(mailerOperations.mailchimpSubscribe(email));
        if (response === mailerTypes.MAILCHIMP_TYPE_SUCCESS) {
            analytics.event({
                category: "Subscribe form",
                action: "Submit",
                label: "Success",
            });
            this.reset();
        } else {
            analytics.event({
                category: "Subscribe form",
                action: "Submit",
                label: "Error on submit to mailchimp",
            });
        }
        this.setState({
            processing: false,
        });
    };

    render() {
        const disabled = this.state.processing || !this.state.recaptchaLoaded;

        const { right, footer } = this.props;

        return (

            <Fragment>
                { right &&
                    <form onSubmit={this.handleSubmit}>
                        <p className="blog__subtitle">Newsletter</p>
                        <div>

                            <div>
                                <label className="form__group-label" htmlFor="email-subscribe">Email address</label>
                                <input
                                    type="text"
                                    className={`input ${this.state.emailError ? "input--error" : ""}`}
                                    id="email-subscribe"
                                    disabled={disabled}
                                    onChange={this.handleEmailChange}
                                    ref={(ref) => { this.email = ref }}
                                />
                            </div>
                            <div>
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
                            </div>
                            <div>
                                <Button
                                    role="submit"
                                    disabled={disabled}
                                    type="solid"
                                    theme="red-white"
                                >
                                    Susbcribe
                                </Button>
                            </div>
                        </div>
                    </form>
                }

                { footer &&
                    <form className="form form--subscribe" onSubmit={this.handleSubmit}>
                        <Row className="form__row align-end-xs">
                            <div className="form__group">
                                <label className="form__group-label" htmlFor="email-subscribe">Email address</label>
                                <input
                                    type="text"
                                    className={`input ${this.state.emailError ? "input--error" : ""}`}
                                    id="email-subscribe"
                                    disabled={disabled}
                                    onChange={this.handleEmailChange}
                                    ref={(ref) => { this.email = ref }}
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
                            </div>
                            <div className="form__group form__group--fixed form__group--lg">
                                <Button
                                    role="submit"
                                    disabled={disabled}
                                    type="solid"
                                    theme="red-white"
                                >
                                    Susbcribe
                                </Button>
                            </div>
                        </Row>
                    </form>
                }

                <ReCaptcha
                    onLoad={this.onRecaptchaLoad}
                    onChange={this.onRecaptchaChange}
                    ref={(ref) => { this.recaptcha = ref }}
                />
            </Fragment>
        );
    }
}

SubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(SubscribeForm);

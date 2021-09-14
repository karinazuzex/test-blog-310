import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextLink from "next/link";
import { error, removeAll } from "react-notification-system-redux";
import Router from 'next/router';

import { validators } from "utils";
import { routes, analytics } from "config";
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
            email: '',
            agreement: false,
        });

        this.state = this.getInitialState();
    }

 
    reset = () => {
        this.setState(this.getInitialState());
        this.email.value = null;
        this.agreement.reset();
    };

    handleEmailChange = async (e) => {
        if (this.state.emailError) {
            await this.setState({ emailError: null });
            this.checkIsErrorLeft();
        }
        this.setState({email: e.currentTarget.value});
    };

    handleAgreementChange = async (e) => {
        if (this.state.agreementError) {
            await this.setState({ agreementError: null });
            this.checkIsErrorLeft();
        }
        this.setState({agreement: e});
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
        this.submit()
    };

    handleRouteChange = () => {
        const { dispatch } = this.props;
            dispatch(removeAll());
    }

    submit = async (token) => {
        const { dispatch } = this.props;
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
        const disabled = this.state.processing;
        const buttonDisabled = !this.state.email || !this.state.agreement ? 'disabled' : '';
        Router.events.on('routeChangeStart', this.handleRouteChange)
        return (

            <Fragment>
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
                                <NextLink href={routes.TERMS_PAGE.path} passHref>
                                    <Link theme="red">
                                        {routes.TERMS_PAGE.nameLong}
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
                                className={buttonDisabled}
                            >
                                Subscribe
                            </Button>
                        </div>
                    </Row>
                </form>
            </Fragment>
        );
    }
}

SubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(SubscribeForm);

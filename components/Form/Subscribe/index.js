import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextLink from "next/link";
import { info, error, removeAll } from "react-notification-system-redux";

import { validators, helpers } from "utils";
import { consts, exceptions, types, routes } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import Button from "components/ui/Button";
import Checkbox from "components/ui/Checkbox";
import Link from "components/ui/Link";

class SubscribeForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            nameError: null,
            emailError: null,
            processing: false,
        });

        this.state = this.getInitialState();
    }

    reset = () => {
        this.setState(this.getInitialState());
        this.name.value = null;
        this.email.value = null;
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
        const response = await dispatch(mailerOperations.mailchimpSubscribe(name, email));
        if (response.result === mailerTypes.MAILCHIMP_TYPE_SUCCESS) {
            this.reset();
        }
        this.setState({
            processing: false,
        });
    };

    render() {
        const disabled = this.state.processing;
        return (
            <form className="form form--subscribe" onSubmit={this.handleSubmit}>
                <Row className="form__row align-end-xs">
                    <div className="form__group">
                        <label className="form__group-label" htmlFor="name-subscribe">Full name</label>
                        <input
                            type="text"
                            className={`input ${this.state.nameError ? "input--error" : ""}`}
                            id="name-subscribe"
                            disabled={disabled}
                            onChange={this.handleNameChange}
                            ref={(ref) => { this.name = ref }}
                        />
                    </div>
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
                <Row className="form__row justify-center-xs">
                    <div className="form__group form__group--fixed">
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
        );
    }
}

SubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(SubscribeForm);

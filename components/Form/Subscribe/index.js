import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { info, error, removeAll } from "react-notification-system-redux";

import { validators, helpers } from "utils";
import { consts, exceptions, types } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import Button from "components/ui/Button";

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
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const nameError = validators.validateName(name);
        const emailError = validators.validateEmail(email);
        this.setState({
            nameError,
            emailError,
        });
        const formError = validators.formatFormError([nameError, emailError]);
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
                    <div className="form__group form__group--fixed form__group--lg">
                        <Button
                            role="submit"
                            disabled={disabled}
                            className="form__group-button"
                            type="solid"
                            theme="red-white">
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

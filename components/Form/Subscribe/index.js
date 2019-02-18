import React, { Component } from "react";
import jsonp from "jsonp";
import toQueryString from "to-querystring";

import { validators, helpers } from "utils";
import { consts } from "config";

import { Row } from "components/grid";
import Button from "components/ui/Button";

class SubscribeForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            nameError: null,
            emailError: null,
            status: null,
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

    handleSubmit = (e) => {
        e.preventDefault();
        const nameError = validators.validateName(this.name.value.trim());
        const emailError = validators.validateEmail(this.email.value.trim());
        this.setState({
            nameError,
            emailError,
        });
        if (nameError || emailError) {
            return;
        }
        const params = toQueryString({
            NAME: this.name.value.trim(),
            EMAIL: this.email.value.trim(),
            [consts.MAILCHIMP_HIDDEN_INPUT_NAME]: "",
        });
        const url = `${helpers.getAjaxUrl(consts.MAILCHIMP_ACTION_URL)}&${params}`;
        jsonp(
            url,
            { param: "c" },
            (err, data) => {
            },
        );
    };

    render() {
        const disabled = this.state.status === "pending" || this.state.status === "success";
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

export default SubscribeForm;

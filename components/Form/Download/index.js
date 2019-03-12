import React, { Component } from "react";
import NextLink from "next/link";

import { validators, helpers } from "utils";
import { consts, routes } from "config";

import { Row } from "components/grid";
import Button from "components/ui/Button";
import Link from "components/ui/Link";
import Checkbox from "components/ui/Checkbox";

class SubscribeForm extends Component {
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

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const nameError = validators.validateName(name);
        const emailError = validators.validateEmail(email);
        this.setState({
            nameError,
            emailError,
            subjectError,
            messageError,
        });
        if (nameError || emailError || subjectError || messageError) {
            return;
        }
        const params = toQueryString({
            NAME: this.name.value.trim(),
            EMAIL: this.email.value.trim(),
            SUBJECT: this.subject.value.trim(),
            MESSAGE: this.message.value.trim(),
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
            <form className="form form--download" onSubmit={this.handleSubmit}>
                <Row className="form__row">
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
                </Row>
                <Row className="form__row">
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
                            ref={(ref) => {this.subscribe = ref}}
                        >
                            Subscribe to our weekly newsletter
                        </Checkbox>
                    </div>
                </Row>
                <Row className="form__row">
                    <div className="form__group">
                        <Checkbox
                            ref={(ref) => {this.policy = ref}}
                        >
                            I agree to the&nbsp;
                            <NextLink href={routes.TERMS_PAGE.path}>
                                <Link theme="red">
                                    terms of service
                                </Link>
                            </NextLink>
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

export default SubscribeForm;

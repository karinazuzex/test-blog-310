import React, { Component } from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { error, info, removeAll } from "react-notification-system-redux";

import { validators, helpers } from "utils";
import { consts, routes, messages } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import Button from "components/ui/Button";
import Link from "components/ui/Link";
import Checkbox from "components/ui/Checkbox";

class DownloadForm extends Component {
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
        this.terms.reset();
        this.subscribe.reset();
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
        const terms = this.terms.getValue();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const termsError = validators.validateTerms(terms);
        const nameError = validators.validateName(name);
        const emailError = validators.validateEmail(email);
        this.setState({
            nameError,
            emailError,
        });
        const formError = validators.formatFormError([nameError, emailError, termsError]);
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
            this.reset();
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

    render() {
        const disabled = this.state.processing;
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
                            ref={(ref) => {this.terms = ref}}
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

DownloadForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(DownloadForm);

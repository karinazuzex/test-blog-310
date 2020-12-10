import { Component } from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { error, removeAll } from "react-notification-system-redux";

import { validators } from "utils";
import { routes, analytics } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import { Button, Link, Checkbox } from "components/ui";

class DownloadForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            agreementError: null,
            emailError: null,
            processing: false,
        });

        this.state = this.getInitialState();
    }

    reset = () => {
        this.setState(this.getInitialState());
        this.email.value = null;
        this.agreement.reset();
        this.subscribe.reset();
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

    
    handleSubmit = async (e) => {
        e.preventDefault();
        analytics.event({
            category: "Download form",
            action: "Submit",
            label: "Start",
        });
        const { dispatch } = this.props;
        this.setState({
            processing: true,
        });
        dispatch(removeAll());
        this.submit();
    };

    submit = async () => {
        const { dispatch, onCallback } = this.props;
      
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
                category: "Download form",
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
                category: "Download form",
                action: "Submit",
                label: "Subscribe choosen, attempting",
            });
            dispatch(mailerOperations.mailchimpSubscribe(email));
        }
        const response = await axios.post("/api/request-download", {
            email,
        });
        if (
            response.status === mailerTypes.MAILER_SUCCESS_STATUS
            && response.data === mailerTypes.MAILER_SUCCESS_DATA) {
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: "Success",
            });
            dispatch(removeAll());
            onCallback(email);
        } else {
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: "Error on submit from backend",
            });
            this.setState({
                processing: false,
            });
        }
    };

    render() {
        const disabled = this.state.processing 
        return (
            <Fragment>
                <form className="form form--download" onSubmit={this.handleSubmit}>
                    <Row className="form__row align-end-xs">
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
                                </NextLink> and&nbsp;
                                <NextLink href={routes.PRIVACY_PAGE.path} passHref>
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
            </Fragment>
        );
    }
}

DownloadForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    onCallback: PropTypes.func.isRequired,
};

export default connect(null)(DownloadForm);

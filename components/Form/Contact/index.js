import { Component, Fragment, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextLink from "next/link";
import axios from "axios";
import { error, info, removeAll } from "react-notification-system-redux";
import ReCaptcha from "components/ReCaptcha";

import { validators } from "../../../utils";
import { getUserGeolocation } from "../../../utils/helpers";
import { messages, routes, analytics, exceptions } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import { Button, Link, Checkbox } from "../../ui";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            companyName: '',
            companyNameError: null,
            agreementError: null,
            nameError: null,
            emailError: null,
            subjectError: null,
            messageError: null,
            processing: false,
            recaptchaValue: null,
            recaptchaLoaded: false,
            features: {
                cluster: false,
                highAvailability: false,
                persistance: false,
                lowLatency: false,
                enterpriseSup: false,
            }
        });

        this.state = this.getInitialState();
        this.features = {
            cluster: createRef(),
            highAvailability: createRef(),
            persistance: createRef(),
            lowLatency: createRef(),
            enterpriseSup: createRef(),
        };
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
        this.message.value = '';
        this.agreement.reset();
        this.subscribe.reset();
    };

    handleNameChange = () => {
        if (this.state.nameError) {
            this.setState({ nameError: null }, this.checkIsErrorLeft);
        }
    };

    handleEmailChange = () => {
        if (this.state.emailError) {
            this.setState({ emailError: null }, this.checkIsErrorLeft);
        }
    };

    handleMessageChange = () => {
        if (this.state.messageError) {
            this.setState({ messageError: null }, this.checkIsErrorLeft);
        }
    };

    handleAgreementChange = () => {
        if (this.state.agreementError) {
            this.setState({ agreementError: null }, this.checkIsErrorLeft);
        }
    };

    /**
     * @param {import("react").SyntheticEvent<HTMLInputElement} e change Event
     */
    handleCompanyNameChange = e => {
        const { value } = e.currentTarget;

        if (this.state.companyNameError) {
            this.setState({ companyNameError: null }, this.checkIsErrorLeft);
        }

        this.setState({ companyName: value });
    }

    /**
     *
     * @param {boolean} checked change Event
     * @param {string} name name of checkbox
     */
    handleFeaturesCheckboxChange = (checked, name) => {
        this.setState({
            features: {
                ...this.state.features,
                [name]: checked,
            }
        });
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

    handleSubmit = (e) => {
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
        const company = this.state.companyName.trim();
        const message = this.message.value.trim();
        const agreementError = validators.validateAgreement(agreement);
        const nameError = validators.validateName(name);
        const emailError = validators.validateEmail(email);
        const companyNameError = validators.validateName(company);
        const messageError = validators.validateMessage(message);
        const formError = validators.formatFormError([
            nameError,
            emailError,
            companyNameError,
            messageError,
            agreementError,
        ]);
        this.setState({
            nameError,
            emailError,
            companyNameError,
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

        // Get user geolocation
        const location = await getUserGeolocation();
        // Send user message to Memurai team
        const response = await axios.post("/api/contact", {
            name,
            email,
            company,
            message,
            location,
        });

        if (
            response.status === mailerTypes.MAILER_SUCCESS_STATUS
            && response.data === mailerTypes.MAILER_SUCCESS_DATA
        ) {
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
                            <label className="form__group-label" htmlFor="name-contact">Name</label>
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
                            <label className="form__group-label" htmlFor="email-contact">Email</label>
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
                            <label className="form__group-label" htmlFor="company-contact">Company</label>
                            <input
                                type="text"
                                className={`input ${this.state.companyNameError ? "input--error" : ""}`}
                                id="company-contact"
                                disabled={disabled}
                                onChange={this.handleCompanyNameChange}
                                value={this.state.companyName}
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
                                loading={this.state.processing}
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

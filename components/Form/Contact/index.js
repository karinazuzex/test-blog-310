import { Component, Fragment, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NextLink from "next/link";
import axios from "axios";
import { error, removeAll } from "react-notification-system-redux";

import { validators } from "../../../utils";
import { getUserGeolocation } from "../../../utils/helpers";
import { routes, analytics } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Row } from "components/grid";
import { Button, Link, Checkbox } from "../../ui";
import { requestSuccessfullySent } from "config/messages";
import { Notify } from "components/ui/Notifications/Notify";


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
            blockedProcessing:false,
            features: {
                cluster: false,
                highAvailability: false,
                persistance: false,
                lowLatency: false,
                enterpriseSup: false,
            },
            notify:{
                show:false,
                message:'',
                timeOut:null,
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
        this.submit();

    };

    submit = async () => {
        const { dispatch } = this.props;
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

            this.setState({notify:{
                    show:true,
                    message:requestSuccessfullySent(name,email), 
                    timeOut:10}})

        } else {
            analytics.event({
                category: "Contact form",
                action: "Submit",
                label: "Error on submit from backend",
            });
        }
        this.setState({
            processing: false,
            blockedProcessing:true,
        });
    };

    onHideNotify = () => {
        this.setState({notify:{
            show:false,
            message:'',
            timeOut:null}
        })
    }

    render() {
        const disabled = this.state.processing || this.state.blockedProcessing

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
                        <div className="form__group" style={{position:'relative'}}>
                            <label className="form__group-label" htmlFor="message-contact">Message</label>
                            <textarea
                                className={`textarea ${this.state.messageError ? "textarea--error" : ""}`}
                                id="message-contact"
                                disabled={disabled}
                                onChange={this.handleMessageChange}
                                ref={(ref) => { this.message = ref }}
                            />
                            {this.state.notify.show && 
                                    <Notify 
                                    message={this.state.notify.message}            
                                    timeOut={this.state.notify.timeOut} 
                                    onHideNotify={this.onHideNotify}
                                    />}
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
            </Fragment>
        );
    }
}

ContactForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(ContactForm);

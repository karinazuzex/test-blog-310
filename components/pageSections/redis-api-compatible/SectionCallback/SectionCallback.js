import { Component, createRef } from 'react';
import NextLink from "next/link";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { error, info, removeAll } from "react-notification-system-redux";
import { Container, Row } from './../../../grid';
import ReCaptcha from "components/ReCaptcha";
import { validators } from "./../../../../utils";
import { messages, routes, analytics, exceptions, consts } from "config";
import { mailerTypes } from "modules/mailer";
import { Button, Link } from "components/ui";
import { getUserGeolocation } from '../../../../utils/helpers';

class SectionCallback extends Component {
  constructor() {
    super();

    this.getInitialState = () => ({
      agreementError: null,
      nameError: null,
      emailError: null,
      companyError: null,
      countryError: null,
      processing: false,
      recaptchaValue: null,
      recaptchaLoaded: false,
      name: '',
      email: '',
      company: '',
      country: ''
    });

    this.recaptchaRef = createRef();

    this.state = this.getInitialState();
  }

  componentWillUnmount() {
    this.recaptchaRef.current.reset();
  }

  reset() {
    this.setState(this.getInitialState());
  }

  checkIsErrorLeft() {
    const { dispatch } = this.props;

    if (!(this.state.nameError || this.state.emailError)) {
      dispatch(removeAll());
    }
  }

  onRecaptchaLoad = () => {
    this.setState({ recaptchaLoaded: true })
  };

  onRecaptchaChange = value => {
    this.setState({ recaptchaValue: value });

    if (this.state.processing) {
      this.submit(value);
    }
  };

  handleNameChange = e => {
    if (this.state.nameError) {
      this.setState(
        { nameError: null },
        () => this.checkIsErrorLeft()
      );
    }

    this.handleInputChange(e);
  }

  handleEmailChange = e => {
    if (this.state.emailError) {
      this.setState({ emailError: null }, () => this.checkIsErrorLeft());
    }
    this.handleInputChange(e);
  }

  handleCompanyChange = e => {

    this.handleInputChange(e);
  }

  handleCountryChange = e => {

    this.handleInputChange(e);
  }

  handleInputChange({ target }) {
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    analytics.event({
      category: "Landing page",
      action: "Submit - redis-api-compatible",
      label: "Start",
    });
    const { dispatch } = this.props;
    this.setState({ processing: true });
    dispatch(removeAll());

    if (!this.state.recaptchaValue) {
      this.recaptchaRef.current.execute();
    } else {
      this.submit(this.state.recaptchaValue);
    }
  }

  async submit(token) {
    const { dispatch } = this.props;

    if (!token) {
      analytics.event({
        category: "Landing page",
        action: "Submit - redis-api-compatible",
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

    const name = this.state.name.trim();
    const email = this.state.email.trim();
    const company = this.state.company.trim();
    const { country } = this.state;
    const nameError = validators.validateName(name);
    const emailError = validators.validateEmail(email);
    const formError = validators.formatFormError([nameError, emailError]);

    this.setState({ nameError, emailError });

    if (formError) {
      analytics.event({
        category: "Landing page",
        action: "Submit - redis-api-compatible",
        label: "Error shown, terminate",
      });
      dispatch(error({
        position: 'bc',
        autoDismiss: 0,
        message: formError
      }));

      this.setState({ processing: false });
      return;
    }

    // Get user geolocation
    const location = await getUserGeolocation();
    // Send user data to Memurai team
    const response = await axios.post("/api/talk_expert", {
      name,
      email,
      company,
      country,
      location
    });

    if (
      response.status === mailerTypes.MAILER_SUCCESS_STATUS
      && response.data === mailerTypes.MAILER_SUCCESS_DATA
    ) {
      this.reset();
      analytics.event({
        category: "Landing page",
        action: "Submit - redis-api-compatible",
        label: "Success",
      });
      dispatch(info({
        position: "bc",
        autoDismiss: 3,
        message: messages.REQUEST_SUCCESSFULLY_SENT,
      }));
    } else {
      analytics.event({
        category: "Landing page",
        action: "Submit - redis-api-compatible",
        label: "Error on submit from backend",
      });
    }

    this.setState({
      processing: false,
    });
  }

  render() {
    const disabled = this.state.processing || !this.state.recaptchaLoaded;

    return (
      <section className="section__callback" id="talk-to-expert">
        <Container>
          <div className="callback__wrapper">
            <h2 className="callback__title text-center">
              Talk to an expert
            </h2>
            <p className="block__description text-center">
              Lets us help you find the optimal solution.&nbsp;
              <br />
              Send us a message today.
            </p>
            <form className="callback__form" id="callback__form" onSubmit={this.handleSubmit}>
              <Row className="form__row">
                <div className="form__group">
                  <input
                    type="text"
                    name="name"
                    id="callback__form--name"
                    className={`input ${this.state.nameError ? "input--error" : ""}`}
                    value={this.state.name}
                    disabled={disabled}
                    onChange={this.handleNameChange}
                    required
                  />
                  <label htmlFor="callback__form--name" className="form__group-label">Full name</label>
                </div>
                <div className="form__group">
                <input
                    type="text"
                    name="email"
                    id="callback__form--email"
                    className={`input ${this.state.emailError ? "input--error" : ""}`}
                    value={this.state.email}
                    disabled={disabled}
                    onChange={this.handleEmailChange}
                    required
                  />
                  <label htmlFor="callback__form--email" className="form__group-label">Email address</label>
                </div>
              </Row>
              <Row className="form__row">
                <div className="form__group">
                  <input
                    type="text"
                    name="company"
                    id="callback__form--company"
                    className={`input ${this.state.companyError ? "input--error" : ""}`}
                    value={this.state.company}
                    disabled={disabled}
                    onChange={this.handleCompanyChange}
                  />
                  <label htmlFor="callback__form--company" className="form__group-label">Company</label>
                </div>
                <div className="form__group">
                  <div className="select-wrapper">
                    <select
                      name="country"
                      id="callback__form--country"
                      className={`input ${this.state.companyError ? "input--error" : ""}`}
                      value={this.state.country}
                      onChange={this.handleCountryChange}
                      disabled={disabled}
                    >
                      <option value="" style={{ display: 'none' }}>Select...</option>
                      {consts.languages.map(({ id, title }) => (
                        <option key={id} value={id}>{title}</option>
                      ))}
                    </select>
                  </div>
                  <label htmlFor="callback__form--country" className="form__group-label">Company</label>
                </div>
              </Row>
              <div className="form__group">
                <div className="btn__wrapper">
                  <Button
                    disabled={disabled}
                    role="submit"
                    type="solid"
                    theme="red-white"
                  >
                    Talk to an expert
                  </Button>
                </div>
              </div>
              <p className="callback__form--privacy text-center">
                By pressing the submit button you are requesting are presentative of Memurai to contact you about
                your enquiry, and you confirm that you have read and agree to the processing of your data by
                Memurai as described in our
                <NextLink href={routes.PRIVACY_PAGE.path} passHref>
                  <Link theme="red">
                    {' ' + routes.PRIVACY_PAGE.nameLong}
                  </Link>
                </NextLink>
              </p>
            </form>
            <ReCaptcha
              onLoad={this.onRecaptchaLoad}
              onChange={this.onRecaptchaChange}
              ref={this.recaptchaRef}
            />
          </div>
        </Container>
      </section>
    );
  }
}

SectionCallback.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(SectionCallback);


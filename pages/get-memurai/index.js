import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { error, removeAll } from "react-notification-system-redux";
import SocialSection from "pages/contact/sections/Social";
import AdditionalInfo from "pages/index/sections/AdditionalInfo";
import { analytics, consts, exceptions } from "config";
import { mailerTypes } from "modules/mailer";
import GetMemuraiTable from "components/Table/GetMemurai";
import Layout from "components/Layout";
import { Container } from "components/grid";
import { Link } from "components/ui";
import ReCaptcha from "components/ReCaptcha";

class GetMemuraiPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      processing: false,
      done: false,
      recaptchaValue: null,
      recaptchaLoaded: false,
      link: null,
    };
  }

  componentDidMount() {
    window.buttonTrigger = () => {
      this.setState({ done: false });
    };
  }

  componentWillUnmount() {
    this.recaptcha.reset();
  }

  reset = () => {
    const { dispatch } = this.props;
    this.setState({ processing: false });
    dispatch(removeAll());
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
      this.download(value);
    }
  };

  handleDownloadClick = async (e) => {
    e.preventDefault();
    analytics.event({
      category: "Simplified download",
      action: "Button click",
    });
    const { dispatch } = this.props;
    dispatch(removeAll());
    this.setState({
      processing: true,
    });
    if (!this.state.recaptchaValue) {
      this.recaptcha.execute();
    } else {
      this.download(this.state.recaptchaValue);
    }
  };

  download = async (token) => {
    const { dispatch } = this.props;
    if (!token) {
      analytics.event({
        category: "Simplified download",
        action: exceptions.RECAPTCHA_VALIDATION_FAILED,
      });
      dispatch(
        error({
          position: "bc",
          autoDismiss: 0,
          message: exceptions.RECAPTCHA_VALIDATION_FAILED,
        })
      );
      this.setState({
        processing: false,
      });
      return;
    }
    try {
      const response = await axios.get("/api/request-download-link");
      if (response && response.status === mailerTypes.MAILER_SUCCESS_STATUS) {
        analytics.event({
          category: "Simplified download",
          action: "Success, start download",
        });
        this.setState({
          link: response.data,
        });
        const downloadLink = document.createElement("a");
        downloadLink.href = response.data;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        this.setState({
          done: true,
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        analytics.event({
          category: "Simplified download",
          action: "Error upon link request",
          label: response.data.error,
        });
        dispatch(
          error({
            position: "bc",
            autoDismiss: 0,
            message: response.data.error,
          })
        );
      }
    } catch (err) {
      analytics.event({
        category: "Simplified download",
        action: "Error upon link request",
        label: exceptions.SERVER_NOT_RESPONDING,
      });
      dispatch(
        error({
          position: "bc",
          autoDismiss: 0,
          message: exceptions.SERVER_NOT_RESPONDING,
        })
      );
    }
    this.reset();
  };

  renderDoneContent = () => (
    <section className="section section__promo section__promo--result">
      <Container>
        <div className="block text-center">
          <h5 className="block__title">
            Thank you for your interest in Memurai
          </h5>
          {this.state.link && (
            <div className="block__description block__description--fixed block__elem--80 text-sm">
              Your download should be starting automatically. If it
              doesn’t,&nbsp;
              <Link
                as="button"
                type="button"
                onClick={this.download}
                theme="red"
              >
                click here
              </Link>
              .
            </div>
          )}
          <p className="block__description text-bold">
            Other things you can do
          </p>
          <p className="block__description text-sm">
            Follow Memurai on&nbsp;
            <Link
              theme="red"
              href={consts.TWITTER_LINK}
              rel="noreferrer noopener"
              target="_blank"
              onClick={() => {
                analytics.event({
                  category: "External link",
                  action: "Open",
                  label: "Twitter",
                });
              }}
            >
              Twitter
            </Link>
            . Read the&nbsp;
            <Link
              theme="red"
              href={consts.MEMURAI_DOCS_LINK}
              onClick={() => {
                analytics.event({
                  category: "External link",
                  action: "Open",
                  label: "Documentation",
                });
              }}
            >
              documentation
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );

  renderDefaultContent = () => (
    <section className="section section__promo section__promo--get-memurai">
      <Container>
        <div className="block text-center">
          <h3 className="block__title block__elem text-bold">Get Memurai</h3>
          <GetMemuraiTable onClickBtn={this.handleDownloadClick} />
        </div>
        <div className="block text-left text-xsm">
          <p>
            <span className="asterisk">*</span>Memurai Developer has certain
            usage restrictions such as requiring a restart after 10 days of
            uptime. The Memurai team reserves the right to modify these
            restrictions at any time.
          </p>
        </div>
      </Container>
    </section>
  );

  render() {
    return (
      <Layout theme="white">
        {this.state.done
          ? this.renderDoneContent()
          : this.renderDefaultContent()}
        <ReCaptcha
          onLoad={this.onRecaptchaLoad}
          onChange={this.onRecaptchaChange}
          ref={(ref) => {
            this.recaptcha = ref;
          }}
        />
        <AdditionalInfo/>
        <SocialSection className="separator-no-tp" />
      </Layout>
    );
  }
}

GetMemuraiPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(GetMemuraiPage);

import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { error, removeAll } from "react-notification-system-redux";

import { analytics, consts, exceptions } from "config";
import { mailerTypes } from "modules/mailer";

import Layout from "components/Layout";
import { Container, Row } from "components/grid";
import { Button } from "components/ui";
import ReCaptcha from "components/ReCaptcha";

class GetMemuraiPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            processing: false,
            recaptchaValue: null,
            recaptchaLoaded: false,
        };
    };

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
        try {
            const response = await axios.get("/api/request-download-link");
            if (
                response
                && response.status === mailerTypes.MAILER_SUCCESS_STATUS
            ) {
                analytics.event({
                    category: "Simplified download",
                    action: "Success, start download",
                });
                const downloadLink = document.createElement("a");
                downloadLink.href = response.data;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } else {
                analytics.event({
                    category: "Simplified download",
                    action: "Error upon link request",
                    label: response.data.error,
                });
                dispatch(error({
                    position: "bc",
                    autoDismiss: 0,
                    message: response.data.error,
                }));
            }
        } catch(err) {
            analytics.event({
                category: "Simplified download",
                action: "Error upon link request",
                label: exceptions.SERVER_NOT_RESPONDING,
            });
            dispatch(error({
                position: "bc",
                autoDismiss: 0,
                message: exceptions.SERVER_NOT_RESPONDING,
            }));
        }
        this.reset();
    };

    render() {
        return (
            <Layout theme="white">
                <section className="section section__promo section__promo--get-memurai">
                    <Container>
                        <div className="block text-center">
                            <h3 className="block__title block__elem text-bold">
                                Get Memurai
                            </h3>
                            <p className="block__description block__description--fixed block__elem--xl">
                                Download the latest version for Windows 64-bit.<br />
                            </p>
                            <Row theme="no-col" className="justify-center-xs">
                                <Button
                                    onClick={this.handleDownloadClick}
                                    type="solid"
                                    theme="red-white free-width multi-line"
                                    disabled={this.state.processing || !this.state.recaptchaLoaded}
                                >
                                    {consts.DOWNLOAD_BUTTON_TEXT}
                                </Button>
                            </Row>
                        </div>
                    </Container>
                </section>
                <ReCaptcha
                    onLoad={this.onRecaptchaLoad}
                    onChange={this.onRecaptchaChange}
                    ref={(ref) => { this.recaptcha = ref }}
                />
            </Layout>
        );
    }
}

GetMemuraiPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(GetMemuraiPage);

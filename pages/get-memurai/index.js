import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { error } from "react-notification-system-redux";
import ReCaptcha from "react-google-recaptcha";

import { analytics, consts, exceptions } from "config";
import { mailerTypes } from "modules/mailer";

import Layout from "components/Layout";
import { Container, Row } from "components/grid";
import { Button } from "components/ui";

class GetMemuraiPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            processing: false,
        };
    };

    componentDidMount() {
        ReactDOM.render(
            <ReCaptcha
                ref={(ref) => { this.recaptcha = ref }}
                size="invisible"
                sitekey={consts.RECAPTCHA_SITE_KEY}
            />,
            this.recaptchaWrapper);
    }

    reset = () => {
        this.setState({ processing: false });
        this.recaptcha.reset();
    };

    handleDownloadClick = async (e) => {
        e.preventDefault();
        analytics.event({
            category: "Simplified download",
            action: "Button click",
        });
        const {dispatch} = this.props;
        this.setState({
            processing: true,
        });
        this.recaptcha.execute();

        try {
            const response = await axios.get("/api/request-download-link");
            console.log(response);
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
                                    disabled={this.state.processing}
                                >
                                    {consts.DOWNLOAD_BUTTON_TEXT}
                                </Button>
                            </Row>
                        </div>
                    </Container>
                </section>
                <div ref={(ref) => { this.recaptchaWrapper = ref }} />
            </Layout>
        );
    }
}

GetMemuraiPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(GetMemuraiPage);

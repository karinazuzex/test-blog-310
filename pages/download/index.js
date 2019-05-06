import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Layout from "components/Layout";
import NextLink from "next/link";
import axios from "axios";

import { consts, routes, analytics } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Container } from "components/grid";
import { Link } from "components/ui";

class DownloadPage extends Component {
    static getInitialProps({query}) {
        return {query};
    }

    constructor(props) {
        super(props);

        this.state = {
            valid: null,
            link: null,
        }
    }

    componentDidMount() {
        analytics.event({
            category: "Download",
            action: "Visit page",
        });
        this.getData();
    }

    getData = async () => {
        const { query } = this.props;
        analytics.event({
            category: "Download",
            action: "Process query",
            label: "Start",
        });
        if (!(query.key && query.id)) {
            analytics.event({
                category: "Download",
                action: "Process query",
                label: "Key and/or Id absent",
            });
            this.setState({
                valid: false,
            });
            return;
        }
        try {
            const response = await axios.post("/api/get-dist-url", { data: query.key });
            if (response.status === mailerTypes.MAILER_SUCCESS_STATUS) {
                analytics.event({
                    category: "Download",
                    action: "Process query",
                    label: "Sucess",
                });
                this.setState({
                    link: response.data,
                });
                this.addEmailToMailchimp(query.id);
                this.download();
                this.setState({
                    valid: true,
                });
                return;
            }
        }
        catch(err) {}
        analytics.event({
            category: "Download",
            action: "Process query",
            label: "Error occured",
        });
        this.setState({
            valid: false,
        });
    };

    addEmailToMailchimp = async (encryptedEmail) => {
        const { dispatch } = this.props;
        analytics.event({
            category: "Download",
            action: "Add to download mailchimp list",
            label: "Initiate",
        });
        const response = await axios.post("/api/decrypt", { data: encryptedEmail });
        if (response.status === mailerTypes.MAILER_SUCCESS_STATUS) {
            dispatch(mailerOperations.mailchimpDownload(response.data));
        }
    };

    download = () => {
        analytics.event({
            category: "Download",
            action: "Start download",
        });
        const downloadLink = document.createElement("a");
        downloadLink.href = this.state.link;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    renderValidContext = () => (
        <Fragment>
            <h5 className="block__title">
                Your download should be starting automatically.
            </h5>
            {this.state.link &&
            <div className="block__description block__description--fixed block__elem--80 text-sm">
                If it doesn’t,&nbsp;
                <Link
                    as="button"
                    type="button"
                    onClick={this.download}
                    theme="red"
                >
                    click here
                </Link>.
            </div>
            }
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
                            label: "Twitter"
                        });
                    }}
                >
                    Twitter
                </Link>. Read the&nbsp;
                <Link
                    theme="red"
                    href={consts.MEMURAI_DOCS_LINK}
                    onClick={() => {
                        analytics.event({
                            category: "External link",
                            action: "Open",
                            label: "Documentation"
                        });
                    }}
                >
                    documentation
                </Link>.
            </p>
        </Fragment>
    );

    renderInvalidContext = () => (
        <Fragment>
            <p className="block__description block__description--fixed">
                Your download link has expired or is invalid. Please try to click on it again or get a new download
                link&nbsp;
                <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref prefetch>
                    <Link theme="red">
                        here
                    </Link>
                </NextLink>.
            </p>
        </Fragment>
    );

    render () {
        return (
            <Layout theme="white">
                <section className="section section__promo section__promo--result">
                    <Container>
                        <div className="block text-center">
                            {this.state.valid !== null
                                ? (
                                    this.state.valid
                                        ? this.renderValidContext()
                                        : this.renderInvalidContext()
                                ) : null
                            }
                        </div>
                    </Container>
                </section>
            </Layout>
        );
    }
}

DownloadPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(DownloadPage);

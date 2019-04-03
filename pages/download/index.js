import React, { Component, Fragment } from "react";
import Layout from "components/Layout";
import NextLink from "next/link";
import axios from "axios";

import { consts, routes } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Container } from "components/grid";
import { Link } from "components/ui";

class DownloadPage extends Component {
    static getInitialProps({query}) {
        return {query}
    }

    constructor(props) {
        super(props);

        this.state = {
            valid: true,
            link: null,
        }
    }

    componentDidMount() {
        this.getLink();
    }

    getLink = async () => {
        const { query } = this.props;
        if (!query.key) {
            this.setState({
                valid: false,
            });
            return;
        }
        const response = await axios.post("/api/decrypt", { data: query.key });
        if (
            response.status === mailerTypes.MAILER_SUCCESS_STATUS) {
            this.setState({
                link: response.data,
            });
            this.download();
        } else {
            this.setState({
                valid: false,
            });
        }
    };

    download = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = this.state.link;
        downloadLink.target = "_blank";
        downloadLink.rel = "noreferrer noopener";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    renderValidContext = () => (
        <Fragment>
            <p className="block__description block__description--fixed block__elem">
                Thank your for downloading Memurai Technical Preview.<br />
                Your download should be starting automatically. {this.state.link &&
            <Fragment>
                If it doesn’t click&nbsp;
                <Link
                    as="button"
                    type="button"
                    onClick={this.download}
                    theme="red"
                >
                    here
                </Link>.
            </Fragment>
            }
            </p>
            <p className="block__description">
                Other things you can do: Follow Memurai on&nbsp;
                <Link
                    theme="red"
                    href={consts.TWITTER_LINK}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Twitter
                </Link>. Read the&nbsp;
                <Link
                    theme="red"
                    href={consts.MEMURAI_DOCS_LINK}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Documentation
                </Link>.
            </p>
        </Fragment>
    );

    renderInvalidContext = () => (
        <Fragment>
            <p className="block__description block__description--fixed">
                Your download link has expired or is invalid. Please try to click on it again or get a new download
                link&nbsp;
                <NextLink href={routes.GET_MEMURAI_PAGE.path}>
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
                <section className="section section__promo section__promo--download">
                    <Container>
                        <div className="block text-center">
                            <h3 className="block__title block__elem text-bold">
                                Download Memurai
                            </h3>
                            {this.state.valid
                                ? this.renderValidContext()
                                : this.renderInvalidContext()
                            }
                        </div>
                    </Container>
                </section>
            </Layout>
        );
    }
}

export default DownloadPage;

import React, { Component, Fragment } from "react";
import Layout from "components/Layout";
import NextLink from "next/link";
import axios from "axios";

import { consts, routes } from "config";
import { mailerOperations, mailerTypes } from "modules/mailer";

import { Container } from "components/grid";
import Link from "components/ui/Link";

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
        this.startDownload();
    }

    startDownload = async () => {
        const { query } = this.props;
        if (!query.key) {
            this.setState({
                valid: false,
            });
            return;
        }
        const response = await axios.post("/api/decrypt", { data: query.key });
        if (
            response.status === mailerTypes.MAILER_SUCCESS_STATUS
            && response.data === mailerTypes.MAILER_SUCCESS_DATA) {
            this.setState({
                link: response.data,
            });
            const downloadLink = document.createElement("a");
            downloadLink.href = response.data;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } else {
            this.setState({
                valid: false,
            });
        }
    };

    renderValidContext = () => (
        <Fragment>
            <p className="block__description block__description--fixed block__elem">
                Thank your for downloading Memurai Technical Preview.<br />
                Your download should be starting automatically. {this.state.link &&
            <Fragment>
                If it doesn’t click&nbsp;
                <Link href={this.state.link} theme="red">
                    here
                </Link>.
            </Fragment>
            }
            </p>
            <p className="block__description block__elem--lg">
                Other things you can do: Follow Memurai on&nbsp;
                <Link
                    theme="red"
                    href={consts.TWITTER_LINK}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Twitter
                </Link>. Read the&nbsp;
                <NextLink href={routes.DOCUMENTATION_PAGE.path}>
                    <Link theme="red">
                        {routes.DOCUMENTATION_PAGE.name}
                    </Link>
                </NextLink>.
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
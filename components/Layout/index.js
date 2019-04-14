import "static/scss/index.scss";

import React, { Component, Fragment } from "react";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import Notifications from "react-notification-system-redux";
import { connect } from "react-redux";
import Head from "next/head";

import { head } from "config";

import Header from "components/Header";
import Footer from "components/Footer";

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };
    }

    handleMenuChange = (state) => {
        this.setState({
            showMenu: state,
        });
    };

    render() {
        const { theme, children, notifications, router } = this.props;
        return (
            <Fragment>
                <Head>
                    <title>{head.title[router.asPath] || head.title.defaultValue}</title>
                    <meta name="description" content={head.description[router.asPath] || head.description.defaultValue} />
                    <meta key="charset" charSet="utf-8" />
                    <meta key="format-detection" name="format-detection" content="telephone=no" />
                    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta key="http-equiv" httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/static/favicon/mstile-150x150.png" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
                    <link key="manifest" rel="manifest" href="/static/favicon/manifest.json" />
                    <link key="favicon" rel="icon" type="image/x-icon" href="/static/favicon/favicon.ico" />
                    <link key="favicon-at16" rel="apple-touch-icon" sizes="16x16" href="/static/favicon/16x16.png" />
                    <link key="favicon-at32" rel="apple-touch-icon" sizes="32x32" href="/static/favicon/32x32.png" />
                    <link key="favicon-at180" rel="apple-touch-icon" sizes="180x180" href="/static/favicon/180x180.png" />
                    <link key="favicon-256" rel="icon" type="image/png" sizes="256x256" href="/static/favicon/256x256.png" />
                    <link key="favicon-192" rel="icon" type="image/png" sizes="192x192" href="/static/favicon/192x192.png" />
                    <link key="favicon-32" rel="icon" type="image/png" sizes="32x32" href="/static/favicon/32x32.png" />
                    <link key="favicon-16" rel="icon" type="image/png" sizes="16x16" href="/static/favicon/16x16.png" />
                    <script key="recaptcha" src="https://www.google.com/recaptcha/api.js?render=explicit" async defer />
                    <script
                        key="cookiebot"
                        id="Cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid="ad4b92a8-bdac-4756-852d-30e83d1feba3"
                        type="text/javascript"
                        async
                    />
                </Head>
                <div className={`layout ${this.state.showMenu ? "layout--show-menu" : ""}`}>
                    <Header
                        theme={theme}
                        onMenuChange={this.handleMenuChange}
                    />
                    <main role="main">
                        {children}
                    </main>
                    <Footer />
                </div>
                <Notifications
                    style={false}
                    notifications={notifications}
                />
            </Fragment>
        );
    }
}

Layout.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
    notifications: PropTypes.arrayOf(PropTypes.shape({
        autoDismiss: PropTypes.number,
        level: PropTypes.string.isRequired,
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        position: PropTypes.string.isRequired,
        uid: PropTypes.any.isRequired,
    })),
};

const mapStateToProps = state => ({
    notifications: state.notifications,
});

export default withRouter(connect(mapStateToProps)(Layout));

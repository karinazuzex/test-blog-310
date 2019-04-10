import "static/scss/index.scss";

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Notifications from "react-notification-system-redux";
import { connect } from "react-redux";
import Head from "next/head";

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
        const { theme, children, notifications } = this.props;
        return (
            <Fragment>
                <Head>
                    <meta key="charset" charSet="utf-8" />
                    <meta key="format-detection" name="format-detection" content="telephone=no" />
                    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta key="http-equiv" httpEquiv="x-ua-compatible" content="ie=edge" />
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

export default connect(mapStateToProps)(Layout);

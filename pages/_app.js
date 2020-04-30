import "static/scss/index.scss";

import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { consts } from "config";
import Head from "next/head";
import { withRouter } from "next/router";
import ReactTooltip from "react-tooltip";

import withReduxStore from "libs/withReduxStore";
import { analytics, head, routes } from "config";
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { ApolloProvider } from 'react-apollo';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import client from 'libs/apollo';

class MyApp extends App {
    constructor(props) {
        super(props);

        // Store routes avoiding duplication into GA, cause nextProps are similar to current using next/router
        this.state = {
            analyticsState: false,
            lastRoute: null,
        };
    };
    componentDidMount() {
        let { analyticsState } = this.state;
        const { router } = this.props;

        if (Cookiebot && Cookiebot.consent && Cookiebot.consent.marketing && Cookiebot.consent.statistics) {
            analyticsState = true;
        }

        window.addEventListener("CookiebotOnAccept", this.onCookiebotAccept, false);
        analytics.init(analyticsState);
        this.setState({ analyticsState });

        this.sendPageview(router.route);
    };

    componentWillReceiveProps(nextProps) {
        const { route } = nextProps.router;
        const { lastRoute } = this.state;
        if (lastRoute !== route) {
            this.sendPageview(route);
        }
    };

    componentWillUnmount() {
        window.removeEventListener("CookiebotOnAccept", this.onCookiebotAccept, false);
    };

    onCookiebotAccept = () => {
        const { router } = this.props;
        if (Cookiebot && Cookiebot.consent && Cookiebot.consent.marketing && Cookiebot.consent.statistics) {
            this.setState({ analyticsState: true });
            analytics.init(true);
            this.sendPageview(router.route);
        }
    };

    sendPageview = (route) => {
        this.setState({ lastRoute: route });
        const routeObj = Object.values(routes).find(item => item.path === route);
        if (routeObj) {
            analytics.pageview(routeObj.path, routeObj.name);
        }
    };

    render () {
        const { Component, pageProps, reduxStore, router } = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <ApolloProvider client={client}>
                        <ApolloHooksProvider client={client}>
                            <Head>
                                <title key="title">{head.title[router.route] || head.title.defaultValue}</title>
                                <meta key="description" name="description" content={head.description[router.route] || head.description.defaultValue} />
                                <meta key="charset" charSet="utf-8" />
                                <meta key="format-detection" name="format-detection" content="telephone=no" />
                                <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
                                <meta key="http-equiv" httpEquiv="x-ua-compatible" content="ie=edge" />
                                <meta key="tile-color" name="msapplication-TileColor" content="#ffffff" />
                                <meta key="tile-image" name="msapplication-TileImage" content="/static/favicon/mstile-150x150.png" />
                                <meta key="theme-color" name="theme-color" content="#ffffff" />
                                <meta key="ms-config" name="msapplication-config" content="/static/favicon/browserconfig.xml" />
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
                                {/* <script src="https://unpkg.com/swiper/js/swiper.min.js" async/> */}
                            </Head>
                            <Component {...pageProps} />
                            <ReactTooltip
                                id="tooltip-light"
                                place="top"
                                type="light"
                                effect="solid"
                                className="tooltip tooltip--light"
                            />
                            <ReactTooltip
                                id="tooltip-dark"
                                place="top"
                                type="dark"
                                effect="solid"
                                className="tooltip tooltip--dark"
                            />
                        </ApolloHooksProvider>
                    </ApolloProvider>
                </Provider>
            </Container>
        )
    }
}

export default withRouter(withReduxStore(MyApp));

import "static/scss/index.scss";

import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";

import { removeAll } from "react-notification-system-redux";
import { analytics, head, routes } from "config";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { ApolloProvider } from "react-apollo";
import { useStore } from "../store";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client from "libs/apollo";

function MyApp({ Component, pageProps }) {
  const [analyticsState, setAnalyticsState] = useState(false);
  const [lastRoute, setLastRoute] = useState(null);
  const router = useRouter();
  const store = useStore(pageProps.initialReduxState);

  const sendPageView = (route) => {
    if (lastRoute !== route) {
      setLastRoute(route);
      const routeObj = Object.values(routes).find((item) => item.path === route);
      if (routeObj) {
        analytics.pageview(routeObj.path, routeObj.name);
      }
    }
  };

  const onCookiebotAccept = () => {
    if (
      Cookiebot &&
      Cookiebot.consent &&
      Cookiebot.consent.marketing &&
      Cookiebot.consent.statistics
    ) {
      setAnalyticsState(true);
      analytics.init(true);
      sendPageView(router.route);
    }
  };

  const onScroll = () => {
    const { getState, dispatch } = store;

    if (typeof getState === 'function') {
      const { notifications = [] } = getState();

      if (notifications.length) {
        dispatch(removeAll());
      }
    }
  };

  // componentDidMount and componentWillUnmount
  useEffect(() => {
    let currAnalyticsState = analyticsState;

    if (
      Cookiebot
      && Cookiebot.consent
      && Cookiebot.consent.marketing
      && Cookiebot.consent.statistics
    ) {
      currAnalyticsState = true;
    }

    window.addEventListener('CookiebotOnAccept', onCookiebotAccept, false);
    analytics.init(currAnalyticsState);
    setAnalyticsState(currAnalyticsState);
    sendPageView(router.route);
    window.addEventListener('scroll', onScroll, false);

    return () => {
      window.removeEventListener('CookiebotOnAccept', onCookiebotAccept, false);
      window.removeEventListener('scroll', onScroll, false);
    }
  }, []);

  useEffect(() => {
    const { route } = router;
    if (lastRoute !== route) {
      sendPageView(route);
    }
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Head>
            <title key="title">
              {head.title[router.route] || head.title.defaultValue}
            </title>
            <meta
              key="description"
              name="description"
              content={
                head.description[router.route] ||
                head.description.defaultValue
              }
            />
            <meta key="charset" charSet="utf-8" />
            <meta
              key="format-detection"
              name="format-detection"
              content="telephone=no"
            />
            <meta
              key="viewport"
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              key="http-equiv"
              httpEquiv="x-ua-compatible"
              content="ie=edge"
            />
            <meta
              key="tile-color"
              name="msapplication-TileColor"
              content="#ffffff"
            />
            <meta
              key="tile-image"
              name="msapplication-TileImage"
              content="/static/favicon/mstile-150x150.png"
            />
            <meta key="theme-color" name="theme-color" content="#ffffff" />
            <meta
              key="ms-config"
              name="msapplication-config"
              content="/static/favicon/browserconfig.xml"
            />
            {/* Twitter card meta */}
            <meta
              name="twitter:card"
              content="summary" />
            <meta
              name="twitter:site"
              content="@MemuraiHQ" />
            <meta
              name="twitter:title"
              content= {head.title[router.route] || head.title.defaultValue} />
            <meta
              name="twitter:description"
              content={head.description[router.route] || head.description.defaultValue} />
            <meta
              name="twitter:image"
              content="/static/favicon/180x180.png/" />
            <link
              key="manifest"
              rel="manifest"
              href="/static/favicon/manifest.json"
            />
            <link
              key="favicon"
              rel="icon"
              type="image/x-icon"
              href="/static/favicon/favicon.ico"
            />
            <link
              key="favicon-at16"
              rel="apple-touch-icon"
              sizes="16x16"
              href="/static/favicon/16x16.png"
            />
            <link
              key="favicon-at32"
              rel="apple-touch-icon"
              sizes="32x32"
              href="/static/favicon/32x32.png"
            />
            <link
              key="favicon-at180"
              rel="apple-touch-icon"
              sizes="180x180"
              href="/static/favicon/180x180.png"
            />
            <link
              key="favicon-256"
              rel="icon"
              type="image/png"
              sizes="256x256"
              href="/static/favicon/256x256.png"
            />
            <link
              key="favicon-192"
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/static/favicon/192x192.png"
            />
            <link
              key="favicon-32"
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicon/32x32.png"
            />
            <link
              key="favicon-16"
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon/16x16.png"
            />
            <script
              key="modernizr"
              id="Modernizr"
              src="/static/scripts/modernizr.js"
              type="text/javascript"
              async
            />
            <script
              key="cookiebot"
              id="Cookiebot"
              src="https://consent.cookiebot.com/uc.js"
              data-cbid="ad4b92a8-bdac-4756-852d-30e83d1feba3"
              type="text/javascript"
              async
            />
            <script
              key="recaptcha"
              src="https://www.google.com/recaptcha/api.js?render=explicit"
              async
              defer
            />
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
  );
}

export default MyApp;

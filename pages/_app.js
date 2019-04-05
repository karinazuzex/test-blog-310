import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { consts } from "config";

import withReduxStore from "libs/withReduxStore";

class MyApp extends App {
    render () {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp);

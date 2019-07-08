import React, { Fragment } from "react";
import Document, { Head, Main, NextScript } from "next/document";

import { GTM_TRACKING_ID } from "config/consts";

export default class extends Document {
    render() {
        return (
            <html>
                <Head>
                {GTM_TRACKING_ID ? (
                    <Fragment>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_TRACKING_ID}`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({
                                        'gtm.start': new Date().getTime(),
                                        event: 'gtm.js'
                                    });
                                `
                            }}
                        />
                    </Fragment>
                ) : null}
                </Head>
                <body>
                {GTM_TRACKING_ID ? (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}`}
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        />
                    </noscript>
                ) : null}
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import Iframe from "react-iframe";

import { GTM_TRACKING_ID } from "config/consts";

export default class extends Document {
    render() {
        return (
            <html>
                <Head>
                {GTM_TRACKING_ID ? (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','${GTM_TRACKING_ID}');
                            `
                        }}
                    />
                ) : null}
                </Head>
                <body>
                {GTM_TRACKING_ID ? (
                    <noscript>
                        <Iframe
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

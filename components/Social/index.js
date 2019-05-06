import React from "react";
import PropTypes from "prop-types";

import NextLink from "next/link";

import { consts, routes, analytics } from "config";

import { Row } from "components/grid";
import { Link } from "components/ui";
import { FacebookLogo, LinkedInLogo, NewsletterLogo, TwitterLogo } from "svg";

const Social = ({ theme = "" }) => (
    <Row className={`justify-center-xs text-center social ${theme ? `social--${theme}` : ""}`}>
        <Link
            href={consts.TWITTER_LINK}
            rel="noreferrer noopener"
            target="_blank"
            className="social__item social__item--twitter"
            onClick={() => {
                analytics.event({
                    category: "External link",
                    action: "Open",
                    label: "Twitter"
                });
            }}
        >
            <TwitterLogo />
        </Link>
        <Link
            href={consts.LINKEDIN_LINK}
            rel="noreferrer noopener"
            target="_blank"
            className="social__item social__item--linkedin"
            onClick={() => {
                analytics.event({
                    category: "External link",
                    action: "Open",
                    label: "LinkedIn"
                });
            }}
        >
            <LinkedInLogo />
        </Link>
        <Link
            href={consts.FACEBOOK_LINK}
            rel="noreferrer noopener"
            target="_blank"
            className="social__item social__item--facebook"
            onClick={() => {
                analytics.event({
                    category: "External link",
                    action: "Open",
                    label: "Facebook"
                });
            }}
        >
            <FacebookLogo />
        </Link>
        <NextLink href={routes.NEWSLETTER_PAGE.path} passHref prefetch>
            <Link className="social__item social__item--newsletter">
                <NewsletterLogo />
            </Link>
        </NextLink>
    </Row>
);

Social.propTypes = {
    theme: PropTypes.string,
};

export default Social;

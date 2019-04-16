import React from "react";
import PropTypes from "prop-types";

import { TWITTER_LINK, FACEBOOK_LINK, GITHUB_LINK, LINKEDIN_LINK } from "config/consts";

import { Row } from "components/grid";
import { Link } from "components/ui";
import { FacebookLogo, LinkedInLogo, GithubLogo, TwitterLogo } from "svg";

const Social = ({ theme = "" }) => (
    <Row className={`justify-center-xs text-center social ${theme ? `social--${theme}` : ""}`}>
        <Link
            href={TWITTER_LINK}
            rel="noreferrer noopener"
            target="_blank"
            className="social__item social__item--twitter"
        >
            <TwitterLogo />
        </Link>
        <Link
            href={LINKEDIN_LINK}
            rel="noreferrer noopener"
            target="_blank"
            className="social__item social__item--linkedin"
        >
            <LinkedInLogo />
        </Link>
        {/*
        <Link
            href={GITHUB_LINK}
            rel="noreferrer noopener"
            target="_blank"
            className="social__item social__item--github"
        >
            <GithubLogo/>
        </Link>
        */}
        <Link
            href={FACEBOOK_LINK}
            rel="noreferrer noopener"
            target="_blank"
            className="social__item social__item--facebook"
        >
            <FacebookLogo />
        </Link>
    </Row>
);

Social.propTypes = {
    theme: PropTypes.string,
};

export default Social;

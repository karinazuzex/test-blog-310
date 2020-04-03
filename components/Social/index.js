import React, { Component } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import ReactTooltip from "react-tooltip";

import { consts, routes, analytics } from "config";

import { Row } from "components/grid";
import { Link } from "components/ui";
import { FacebookLogo, LinkedInLogo, NewsletterLogo, TwitterLogo, StackOverflowLogo } from "svg";

class Social extends Component {
    componentDidMount() {
        ReactTooltip.rebuild();
    }

    render() {
        const { theme } = this.props;
        let tooltipTheme;
        switch (theme) {
            case "transparent":
                tooltipTheme = "tooltip-dark";
                break;
            default:
                tooltipTheme = "tooltip-light";
        }
        return (
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
                    data-tip="Twitter"
                    data-for={tooltipTheme}
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
                    data-tip="LinkedIn"
                    data-for={tooltipTheme}
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
                    data-tip="Facebook"
                    data-for={tooltipTheme}
                >
                    <FacebookLogo />
                </Link>
                <Link
                    href={consts.STACKOVERFLOW_LINK}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="social__item social__item--stackoverflow"
                    onClick={() => {
                        analytics.event({
                            category: "External link",
                            action: "Open",
                            label: "StackOverflow"
                        });
                    }}
                    data-tip="Stack Overflow"
                    data-for={tooltipTheme}
                >
                    <StackOverflowLogo />
                </Link>
                <NextLink href={routes.NEWSLETTER_PAGE.path} passHref prefetch>
                    <Link
                        className="social__item social__item--newsletter"
                        data-tip="Subscribe to our newsletter"
                        data-for={tooltipTheme}
                    >
                        <NewsletterLogo />
                    </Link>
                </NextLink>
            </Row>
        );
    };
}

Social.propTypes = {
    theme: PropTypes.oneOf(["transparent", "default"]),
};

Social.defaultProps = {
    theme: "default",
};

export default Social;

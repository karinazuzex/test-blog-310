import React from "react";
import PropTypes from "prop-types";

import { Row } from "components/grid";
import Link from "components/ui/Link";
import { FacebookLogo, LinkedInLogo, GithubLogo, TwitterLogo } from "svg";

const Social = ({ theme = "" }) => (
    <Row className={`justify-center-xs text-center social ${theme ? `social--${theme}` : ""}`}>
        <Link href="" className="social__item social__item--twitter">
            <TwitterLogo />
        </Link>
        <Link href="" className="social__item social__item--linkedin">
            <LinkedInLogo />
        </Link>
        <Link href="" className="social__item social__item--github">
            <GithubLogo/>
        </Link>
        <Link href="" className="social__item social__item--facebook">
            <FacebookLogo />
        </Link>
    </Row>
);

Social.propTypes = {
    theme: PropTypes.string,
};

export default Social;

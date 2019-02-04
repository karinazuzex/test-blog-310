import React from "react";

import { Row } from "components/grid";
import Link from "components/ui/Link";
import { FacebookLogo, LinkedInLogo, GithubLogo, TwitterLogo } from "svg";

const Social = () => (
    <Row className="justify-center-xs text-center social">
        <Link href="" className="social__item">
            <TwitterLogo />
        </Link>
        <Link href="" className="social__item">
            <LinkedInLogo />
        </Link>
        <Link href="" className="social__item">
            <GithubLogo/>
        </Link>
        <Link href="" className="social__item">
            <FacebookLogo />
        </Link>
    </Row>
);

export default Social;

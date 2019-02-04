import React from "react";

import { Row } from "components/grid";
import Link from "components/ui/Link";

const Social = () => (
    <Row className="justify-center-xs text-center social">
        <Link href="" className="social__item">Tw</Link>
        <Link href="" className="social__item">In</Link>
        <Link href="" className="social__item">GH</Link>
        <Link href="" className="social__item">Fb</Link>
    </Row>
);

export default Social;

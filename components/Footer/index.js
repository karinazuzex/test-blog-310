import React from "react";

import { Container, Col, Row } from "components/grid";
import FooterMenu from "components/Menu/Footer";
import Link from "components/ui/Link";
import Social from "components/Social";

const Footer = () => (
    <footer role="content-info" className="footer bg-black">
        <Container>
            <Row>
                <Col attributes="xs-4">
                    <div className="footer__header">
                        Quick links
                    </div>
                    <FooterMenu />
                </Col>
                <Col attributes="xs-4">
                    <Social />
                </Col>
                <Col attributes="xs-4">
                    <div className="footer__contacts text-right">
                        Menurai Inc.<br />
                        113 Cherry Street<br />
                        #11630<br />
                        Seattle, WA 98104<br />
                        © 2019<br />
                        All rights reserved by Menurai Inc.<br />
                        <span className="footer__terms">
                            <Link href="" theme="grey-light">Terms</Link>
                            <Link href="" theme="grey-light">Privacy</Link>
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;

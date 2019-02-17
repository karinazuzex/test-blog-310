import React from "react";

import { Container, Col, Row, Column } from "components/grid";
import FooterMenu from "components/Menu/Footer";
import Link from "components/ui/Link";
import Social from "components/Social";

const Footer = () => (
    <footer role="content-info" className="footer bg-black">
        <Container>
            <Row className="footer__row">
                <Col attributes="xs-12 lg-4" className="footer__col">
                    <Column className="align-center-xs align-start-lg">
                        <div className="footer__header">
                            Quick links
                        </div>
                        <FooterMenu />
                    </Column>
                </Col>
                <Col attributes="xs-12 lg-4" className="footer__col">
                    <Social />
                </Col>
                <Col attributes="xs-12 lg-4" className="footer__col">
                    <Column className="align-center-xs align-end-lg">
                        <div className="footer__contacts">
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
                    </Column>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;

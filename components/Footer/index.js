import React from "react";
import NextLink from "next/link";

import { routes } from "config";

import { Container, Col, Row, Column } from "components/grid";
import FooterMenu from "components/Menu/Footer";
import { Link } from "components/ui";
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
                            Memurai<br />
                            113 Cherry Street #11630<br />
                            Seattle, WA 98104<br />
                            © 2019<br />
                            All rights reserved by Janea Systems, Inc.<br />
                            <span className="footer__terms">
                                <NextLink href={routes.TERMS_PAGE.path}>
                                    <Link href="" theme="grey-light">
                                        {routes.TERMS_PAGE.name}
                                    </Link>
                                </NextLink>
                                <NextLink href={routes.PRIVACY_PAGE.path}>
                                    <Link href="" theme="grey-light">
                                        {routes.PRIVACY_PAGE.name}
                                    </Link>
                                </NextLink>
                                <NextLink href={routes.COOKIE_PAGE.path}>
                                    <Link href="" theme="grey-light">
                                        {routes.COOKIE_PAGE.name}
                                    </Link>
                                </NextLink>
                            </span>
                        </div>
                    </Column>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;

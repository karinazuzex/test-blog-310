import React from "react";
import NextLink from "next/link";

import { routes } from "config";

import { Container, Col, Row, Column } from "components/grid";
import { QuickLinks, Learn, GetInTouch } from "components/Menu/Footer";
import SubscribeForm from "components/Form/Subscribe";
import { Link } from "components/ui";
import { LogoFooter } from "svg";
import Social from "components/Social";

const Footer = () => (
  <footer role="content-info" className="footer bg-black">
    <Container>
      <Row className="footer__row footer__row-main">
        <Col attributes="xs-12 lg-8" className="footer__col">
          <Row className="footer__row">
            <Col attributes="xs-12 lg-3" className="footer__col">
              <Column className="align-center-xs align-start-lg">
                <div className="footer__header">Quick links</div>
                <QuickLinks />
              </Column>
            </Col>
            <Col attributes="xs-12 lg-3" className="footer__col">
              <Column className="align-center-xs align-start-lg">
                <div className="footer__header">Learn</div>
                <Learn />
              </Column>
            </Col>
            <Col attributes="xs-12 lg-3" className="footer__col">
              <Column className="align-center-xs align-start-lg">
                <div className="footer__header">Get in touch</div>
                <GetInTouch />
              </Column>
            </Col>
            <Col
              attributes="xs-12 lg-12"
              className="footer__col footer__col--nomobile "
            >
              <Column className="align-center-xs align-start-lg footer__contacts-column">
                <NextLink href={routes.HOME_PAGE.path} passHref prefetch>
                  <Link className="header__logo">
                    <LogoFooter className={`header__logo--img`} />
                  </Link>
                </NextLink>
                <div className="footer__contacts">
                  Memurai 113 Cherry Street #11630 Seattle, WA 98104 <br />
                  © 2019-2020 All rights reserved by Janea Systems, Inc.
                  <br />
                  <span className="footer__terms">
                    <NextLink href={routes.TERMS_PAGE.path} passHref prefetch>
                      <Link theme="grey-light">{routes.TERMS_PAGE.name}</Link>
                    </NextLink>
                    <NextLink href={routes.PRIVACY_PAGE.path} passHref prefetch>
                      <Link theme="grey-light">{routes.PRIVACY_PAGE.name}</Link>
                    </NextLink>
                    <NextLink href={routes.COOKIE_PAGE.path} passHref prefetch>
                      <Link theme="grey-light">{routes.COOKIE_PAGE.name}</Link>
                    </NextLink>
                  </span>
                </div>
              </Column>
            </Col>
          </Row>
        </Col>
        <Col attributes="xs-12 lg-4" className="footer__col">
          <Column className="align-center-xs align-start-lg">
            <div className="footer__header">Subscribe to our newsletter</div>
            <SubscribeForm />
          </Column>
        </Col>
        <Col
          attributes="xs-12 lg-12"
          className="footer__col footer__col--onlymobile "
        >
          <Column className="align-center-xs align-start-lg footer__contacts-column">
            <NextLink href={routes.HOME_PAGE.path} passHref prefetch>
              <Link className="header__logo">
                <LogoFooter className={`header__logo--img`} />
              </Link>
            </NextLink>
            <div className="footer__contacts">
              Memurai 113 Cherry Street #11630 Seattle, WA 98104 <br />
              © 2019-2020 All rights reserved by Janea Systems, Inc.
              <br />
              <span className="footer__terms">
                <NextLink href={routes.TERMS_PAGE.path} passHref prefetch>
                  <Link theme="grey-light">{routes.TERMS_PAGE.name}</Link>
                </NextLink>
                <NextLink href={routes.PRIVACY_PAGE.path} passHref prefetch>
                  <Link theme="grey-light">{routes.PRIVACY_PAGE.name}</Link>
                </NextLink>
                <NextLink href={routes.COOKIE_PAGE.path} passHref prefetch>
                  <Link theme="grey-light">{routes.COOKIE_PAGE.name}</Link>
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

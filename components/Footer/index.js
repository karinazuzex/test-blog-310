import React from "react";
import NextLink from "next/link";

import { routes } from "config";

import { Container, Col, Row, Column } from "components/grid";
import {
  QuickLinks,
  Learn,
  GetInTouch,
  Contacts,
} from "components/Menu/Footer";
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
            <Col attributes="xs-6 lg-3" className="footer__col">
              <Column className="align-start-xs align-start-lg">
                <div className="footer__header">Quick links</div>
                <QuickLinks />
              </Column>
            </Col>
            <Col attributes="xs-6 lg-3" className="footer__col">
              <Column className="align-end-xs align-start-lg">
                <Column className="align-start-xs align-start-lg">
                  <div className="footer__header">Learn</div>
                  <Learn />
                </Column>
              </Column>
            </Col>
            <Col attributes="xs-6 lg-3" className="footer__col">
              <Column className="align-start-xs align-start-lg">
                <div className="footer__header">Get in touch</div>
                <GetInTouch />
              </Column>
            </Col>
            <Col
              attributes="xs-12 lg-12"
              className="footer__col footer__col--nomobile "
            >
              <Contacts />
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
          <Contacts />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

import { Container, Col, Row, Column } from "components/grid";
import {
  QuickLinks,
  Learn,
  GetInTouch,
  Contacts,
} from "../Menu/Footer";
import SubscribeForm from "components/Form/Subscribe";

const Footer = () => (
  <footer role="content-info" className="footer bg-black">
    <Container>
      <Row className="footer__row footer__row-main">
        <Col attributes="xs-12 lg-8" className="footer__col">
          <Column className="align-center-xs">
            <Row className="footer__row">
              <Col attributes="xs-12 xsm-6 lg-3" className="footer__col">
                <Column className="align-center-xs align-start-xsm align-start-lg">
                  <div className="footer__header">Quick links</div>
                  <QuickLinks />
                </Column>
              </Col>
              <Col attributes="xs-12 xsm-6 lg-3" className="footer__col">
                <Column className="align-center-xs align-end-xsm align-start-lg">
                  <Column className="align-center-xs align-start-xsm align-start-lg">
                    <div className="footer__header">Learn</div>
                    <Learn />
                  </Column>
                </Column>
              </Col>
              <Col attributes="xs-12 xsm-6 sm-6 lg-3" className="footer__col">
                <Column className="align-center-xs align-start-xsm align-start-lg">
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
          </Column>
        </Col>
        <Col attributes="xs-12 lg-4" className="footer__col">
        <Column className="align-center-xs">
          <Column className="align-start-xs align-start-lg">
            <div className="footer__header footer__header--subscribe">
              Subscribe to our newsletter
            </div>
            <SubscribeForm />
            <Col
              attributes="xs-12 lg-12"
              className="footer__col footer__col--onlymobile "
            >
              <Contacts />
            </Col>
          </Column>
          </Column>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

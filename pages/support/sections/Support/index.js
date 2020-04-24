import React from "react";
import NextLink from "next/link";
import { Button, Link } from "components/ui";
import { routes } from "config";
import { Container, Row, Col } from "components/grid";
const SupportSection = () => {
  return (
    <section className="section section__support bg-white-grey separator-bt">
      <Container>
        <Col>
          <Row className="justify-between-lg justify-between-md justify-center-xs">
            <div className="block__blog block__elem--40 col-md-6 col-xs-12">
              <h4 className="blog__title blog__title--bottom">
                Developer Edition
              </h4>
              <p className="blog__text blog__text--bottom blog__text--link">
                Memurai community support on StackOverflow.
              </p>
              <Link
                href="https://stackoverflow.com/questions/tagged/memurai"
                target="_blank"
                passHref
                prefetch
              >
                <Button className="block__elem" type="hollow" theme="red">
                  Go to Stack Overflow
                </Button>
              </Link>
            </div>
            <div className="block__blog block__elem--40 col-md-6 col-xs-12">
              <h4 className="blog__title blog__title--bottom">
                Enterprise Edition
              </h4>
              <p className="blog__text blog__text--bottom blog__text--link">
                Submit support issues via Help Center or email us at
                <Link
                  href="mailto:support@memurai.com"
                  className="button__arrow link link--red"
                >
                  <span className="blog__text">support@memurai.com</span>
                </Link>
              </p>
              <Link
                href="https://support.memurai.com"
                target="_blank"
                passHref
                prefetch
              >
                <Button className="block__elem" type="hollow" theme="red">
                  Go to Help Center
                </Button>
              </Link>
            </div>
          </Row>
          <Row className="justify-between-lg justify-center-xs">
            <div className="block__blog block__elem--40 col-md-12 col-xs-12">
              <h4 className="blog__title blog__title--bottom">
                Consulting Services
              </h4>
              <p className="blog__text blog__text--bottom blog__text--link">
                Our team is happy to offer consulting services for architectural
                and techical implementations specific for you solution. Contact
                us for more details.
              </p>
              <NextLink href={routes.CONTACT_PAGE.path+'?support'} passHref prefetch>
                <Button className="block__elem" type="hollow" theme="red">
                  Contact us
                </Button>
              </NextLink>
            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default SupportSection;

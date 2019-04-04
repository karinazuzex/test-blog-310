import React from "react";
import NextLink from "next/link";

import { faq } from "content";
import { routes } from "config";

import { Container, Row, Col } from "components/grid";
import { Button } from "components/ui";
import DetailsGroup from "components/ui/Details/Group";

const FAQSection = () => (
    <section className="section section__faq section__faq--why-memurai bg-white-grey separator-bt">
        <Container>
            <Row>
                <Col attributes="xs-12 lg-6">
                    <div className="block">
                        <div className="block__pretitle block__elem--xs text-no-transform">FAQ</div>
                        <h3 className="block__title block__elem">
                            Common questions about Memurai
                        </h3>
                        <NextLink href={routes.CONTACT_PAGE.path} passHref prefetch>
                            <Button className="block__elem" type="hollow" theme="red chevron">
                                Ask a question
                            </Button>
                        </NextLink>
                    </div>
                </Col>
                <Col attributes="xs-12 lg-6">
                    <DetailsGroup data={faq} autoExpand={0} />
                </Col>
            </Row>
        </Container>
    </section>
);

export default FAQSection;

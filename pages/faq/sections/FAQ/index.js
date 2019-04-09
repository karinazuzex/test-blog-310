import React from "react";
import NextLink from "next/link";

import { faq } from "content";
import { routes } from "config";
import { helpers } from "utils";

import { Container, Row, Col } from "components/grid";
import { Button } from "components/ui";

const FAQSection = () => {
    const renderFAQ = () => faq.map(item => (
        <div key={helpers.getUID()} className="block__elem--xl text-left">
            <h5 className="block__title block__elem--xs">
                {item.summary}
            </h5>
            <div className="block__description">
                {item.info}
            </div>
        </div>
    ));
    return (
        <section className="section section__faq bg-white-grey separator-bt">
            <Container>
                <div className="block">
                    <Row className="justify-center-xs">
                        <Col attributes="xs-12 md-8">
                            {renderFAQ()}
                            <NextLink href={routes.CONTACT_PAGE.path} passHref prefetch>
                                <Button className="block__elem" type="hollow" theme="red chevron">
                                    Ask a question
                                </Button>
                            </NextLink>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default FAQSection;

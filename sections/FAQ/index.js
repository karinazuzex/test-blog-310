import React from "react";

import { Container, Row, Col } from "components/grid/index";
import Button from "components/ui/Button/index";

const FAQSection = () => (
    <section className="section section__faq bg-white-grey separator-bt">
        <Container>
            <Row>
                <Col attributes="xs-6">
                    <div className="block">
                        <div className="block__pretitle block__elem text-no-transform">FAQs</div>
                        <h3 className="block__title block__elem">
                            Common questions about Memurai
                        </h3>
                        <Button type="hollow" theme="red chevron">
                            Learn more
                        </Button>
                    </div>
                </Col>
                <Col attributes="xs-6">

                </Col>
            </Row>
        </Container>
    </section>
);

export default FAQSection;

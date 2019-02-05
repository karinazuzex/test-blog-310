import React from "react";

import { Container, Row, Col } from "components/grid/index";
import Button from "components/ui/Button/index";
import Details from "components/ui/Details";

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
                    <Details
                        summary="How does Memurai work?"
                        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <Details
                        summary="What is the file size?"
                        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <Details
                        summary="How do I get in touch with the developers?"
                        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </Col>
            </Row>
        </Container>
    </section>
);

export default FAQSection;

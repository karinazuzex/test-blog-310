import React from "react";

import { Container, Row, Col } from "components/grid/index";
import SubscribeForm from "components/Form/Subscribe/index";

const SubscribeSection = () => (
    <section className="section section__subscribe section__subscribe--about bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">LATEST NEWS</div>
                <h3 className="block__title block__elem--lg">
                    Stay informed.<br />
                    <span className="text-normal">Our newsletter is sent weekly</span>
                </h3>
                <Row className="justify-center-xs">
                    <Col attributes="xs-12 md-8">
                        <SubscribeForm />
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
);

export default SubscribeSection;

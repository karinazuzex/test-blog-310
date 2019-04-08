import React from "react";

import { Container, Row, Col } from "components/grid/index";
import SubscribeForm from "components/Form/Subscribe/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--newsletter">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    Latest news
                </h3>
                <p className="block__description block__description--fixed block__elem--xl">
                    Stay informed.<br />
                    Our newsletter is sent weekly.
                </p>
                <Row className="justify-center-xs">
                    <Col attributes="xs-12 md-8">
                        <SubscribeForm />
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
);

export default PromoSection;

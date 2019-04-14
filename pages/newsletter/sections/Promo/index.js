import React from "react";

import { Container, Row, Col } from "components/grid";
import SubscribeForm from "components/Form/Subscribe";

const PromoSection = () => (
    <section className="section section__promo section__promo--newsletter">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    Subscribe to our newsletter
                </h3>
                <p className="block__description block__description--fixed block__elem--xl">
                    Receive updates about key news and special offers.<br />
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

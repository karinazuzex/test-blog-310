import React from "react";

import { Container, Row, Col } from "components/grid";
import ContactForm from "components/Form/Contact";

const PromoSection = () => (
    <section className="section section__promo section__promo--contact">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    Contact
                </h3>
                <p className="block__description block__description--fixed block__elem--lg">
                    Have a question? Send us a note using the form below and someone from the Memurai team will be in
                    touch soon.
                </p>
                <Row className="justify-center-xs">
                    <Col attributes="xs-12 md-8">
                        <ContactForm />
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
);

export default PromoSection;

import React from "react";

import { Container, Row, Col } from "components/grid/index";
import ContactForm from "components/Form/Contact/index";

const ContactSection = () => (
    <section className="section section__contact section__contact--contact bg-white-grey">
        <Container>
            <div className="block">
                <Row className="justify-center-xs">
                    <Col attributes="xs-12 md-8">
                        <ContactForm />
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
);

export default ContactSection;
